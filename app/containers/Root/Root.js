/* global Auth0Lock, Firebase */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Message, Title, Row, Column, NavigationMenu } from '../../components';
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

  render() {
    const loggedMessage = this.props.tokenId &&
      <div>UUUUjujujujuju Logged in!!!!!!!!!</div>;

    return (
      <div>
        <Message
          message="This is a test message for the retrospective tool, Hello World!"
          userImageURL={'/assets/default-avatars/avatar_6.jpg'}
          userName={'David Gómez'}
          userEmail={'dgomez@hugeinc.com'}
        />
        <LoginPanel
          login={this.login}
          logout={this.logout}
          message={loggedMessage}
        />
        <NavigationMenu />
        <div className="container">
          <Row>
            <Column>
              <Title className="intent--start">START</Title>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
            </Column>
            <Column>
              <Title className="intent--stop">STOP</Title>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
            </Column>
            <Column>
              <Title className="intent--continue">CONTINUE</Title>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
              <p>Hola mundo genial???</p>
            </Column>
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
  actions: PropTypes.objectOf({
    setTokenId: PropTypes.func
  })
};

export default connect(
  state => ({
    tokenId: state.loggedUser.tokenId
  }),
  dispatch => ({
    actions: bindActionCreators({
      setTokenId
    }, dispatch)
  })
)(Root);
