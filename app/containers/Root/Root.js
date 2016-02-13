/* global Auth0Lock, Firebase */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '../../components';
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
  message: PropTypes.string
};

const cleanUrlHash = () => history.pushState('', document.title, window.location.pathname);

const getIdToken = authHash => {
  let tokenId = localStorage.getItem('userToken');

  if (!tokenId && authHash) {
    if (authHash.id_token) {
      tokenId = authHash.id_token;
      localStorage.setItem('userToken', authHash.id_token);
      cleanUrlHash();
    }
    if (authHash.error) {
      console.log('Error signing in', authHash);
      return null;
    }
  }

  return tokenId;
};

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    const myDataRef = new Firebase('https://deathwing.firebaseio-demo.com/');

    console.log(myDataRef);
  }

  componentWillMount() {
    this.lock = new Auth0Lock('YiIxyJNx5h6R01tOQ3zGiTLAXMwu9oLq', 'deathwing.auth0.com');
    const authHash = this.lock.parseHash(window.location.hash);

    this.props.actions.setTokenId(getIdToken(authHash));
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
        <Avatar
          userImageURL={'/assets/default-avatars/avatar_6.jpg'}
          userName={'David Gómez'}
          userEmail={'dgomez@hugeinc.com'}
        />
        <LoginPanel
          login={this.login}
          logout={this.logout}
          message={loggedMessage}
        />
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
