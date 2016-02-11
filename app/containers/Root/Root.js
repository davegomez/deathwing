/* global Auth0Lock */

import React from 'react';
import { connect } from 'react-redux';
// import { LoginForm } from '../../components';
import { Avatar } from '../../components';
import { } from '../../actions/action-creators';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock('YiIxyJNx5h6R01tOQ3zGiTLAXMwu9oLq', 'deathwing.auth0.com');
    this.setState({ idToken: this.getIdToken() }); // Get the token
  }

  getIdToken() {
    let idToken = localStorage.getItem('userToken');
    const authHash = this.lock.parseHash(window.location.hash);

    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
        return null;
      }
    }

    console.log(idToken);
    return idToken;
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
    const loggedMessage = this.state.idToken &&
      <div>UUUUjujujujuju Logged in!!!!!!!!!</div>;

    return (
      <div>
        <Avatar
          userImageURL={'/assets/dog.jpg'}
          userName={'David Gómez'}
          userEmail={'dgomez@hugeinc.com'}
        />
        <button onClick={this.login}>
          Login
        </button>
        <button onClick={this.logout}>
          Logout
        </button>
        {loggedMessage}
      </div>
    );
  }
}

Root.propTypes = {

};

export default connect(
  () => ({

  }),
  () => ({

  })
)(Root);
