/* global Auth0Lock, Firebase */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Message, Intent, Row, NavigationMenu } from '../../components';
import { bindActionCreators } from 'redux';
import { setTokenId } from '../../actions/actionCreators';

// TODO: Make this better! obviously...
const LoginPanel = (props) =>
  <div style={{ marginTop: '40px' }}>
    <button onClick={props.login}>Login</button>
    <button onClick={props.logout}>Logout</button>
    {props.message}
  </div>;

LoginPanel.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.boolean
  ])
};

const cleanUrlHash = () => history.pushState('', document.title, window.location.pathname);

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.renderMessage = this.renderMessage.bind(this);

    const myDataRef = new Firebase('https://deathwing.firebaseio-demo.com/');

    console.log(myDataRef);
  }

  componentWillMount() {
    const auth0ClientId = 'YiIxyJNx5h6R01tOQ3zGiTLAXMwu9oLq';

    this.lock = new Auth0Lock(auth0ClientId, 'deathwing.auth0.com');

    const authHash = this.lock.parseHash(window.location.hash);
    let tokenId = localStorage.getItem('userToken');

    if (!tokenId && authHash) {
      this.lock.getProfile(authHash.id_token, (err, profile) => {
        if (err) throw err;

        profile.access_token = authHash.access_token;

        this.lock.getClient().getDelegationToken({
          target: auth0ClientId,
          id_token: authHash.id_token,
          api_type: 'firebase'
        }, (err, delegationResult) => {
          profile.firebase_token = delegationResult.id_token;
          localStorage.setItem('firebase_profile', profile);
          console.log('profile?', profile); // TODO: create action to store the profile???
          //cleanUrlHash();

          const ref = new Firebase('https://deathwing.firebaseio.com');

          ref.authWithCustomToken(profile.firebase_token, (error, authData) => {
            if (error) {
              console.log('Login Failed!', error);
            } else {
              console.log('Login Succeeded!', authData);
              const usersRef = ref.child('users');
              window.usersRef = usersRef;

              usersRef.on('child_added', function(snap, prevChild) {
                const data = snap.val();
                const key = snap.key();

                console.log(prevChild, key, data);
              });
            }
          });
        });
      });
    }

    this.props.actions.setTokenId(tokenId);
  }

  login() {
    console.log('Log in...');
    this.lock.show(); // Just call this and do the magic!
  }

  logout() {
    console.log('Log out...');
    localStorage.removeItem('userToken');
    this.lock.logout({ returnTo: 'http://localhost:3000' }); // Just call this and do the magic!
    // After this, redirect that noob to your home
  }

  renderMessage(item, key) {
    const currentUser = this.props.users.find(user => user.user_id === item.author);

    console.log('currentUser', currentUser);

    return currentUser && (
      <Message
        key={key}
        message={item.message}
        userImageURL={currentUser.picture}
        userName={currentUser.name}
        userEmail={currentUser.email}
      />
    );
  }

  render() {
    const loggedMessage = this.props.tokenId &&
      <div>UUUUjujujujuju Logged in!!!!!!!!!</div>;
    const { project } = this.props;
    const [retro] = this.props.retros;

    return (
      <div>
        <h1>Name: {project.name}</h1>
        <h2>Slug: {project.slug}</h2>
        <h4>Retro date: {retro.date}</h4>
        <LoginPanel
          login={this.login}
          logout={this.logout}
          message={loggedMessage}
        />
        <NavigationMenu />
        <div className="container">
          <Row>
            <Intent className="intent--start" title="START">
              {retro.start.map(this.renderMessage)}
            </Intent>
            <Intent className="intent--stop" title="STOP">
              {retro.stop.map(this.renderMessage)}
            </Intent>
            <Intent className="intent--continue" title="CONTINUE">
              {retro.continue.map(this.renderMessage)}
            </Intent>
          </Row>
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  tokenId: PropTypes.oneOfType([
    PropTypes.boolean,
    PropTypes.string
  ]),
  project: PropTypes.object,
  actions: PropTypes.objectOf({
    setTokenId: PropTypes.func
  })
};

export default connect(
  ({ loggedUser, project, retros, users }) => ({
    tokenId: loggedUser.tokenId,
    project,
    retros, // TODO: Add current retro to the reducer
    users
  }),
  dispatch => ({
    actions: bindActionCreators({
      setTokenId
    }, dispatch)
  })
)(Root);
