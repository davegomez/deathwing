import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    // TODO: Create an action for this!
    // Read this: https://developers.google.com/identity/sign-in/web/reference#gapiauth2initwzxhzdk20paramswzxhzdk21
    const auth = gapi.auth2.getAuthInstance();
    const user = auth.currentUser.get();

    if (!user.isSignedIn()) {
      auth.signIn()
        .then(() => console.log('authenticated!!!'));
    } else {
      console.log('You are already signed in!');
    }
  }

  handleLogout() {
     // TODO: Create an action for this!
    // Read this: https://developers.google.com/identity/sign-in/web/reference#gapiauth2initwzxhzdk20paramswzxhzdk21
    const auth = gapi.auth2.getAuthInstance();
    const user = auth.currentUser.get();

    if (user.isSignedIn()) {
      auth.signOut()
        .then(e => console.log('Good bye my friend!'));
    } else {
      console.log('You are not logged in!');
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Sign in with Google</button>
        <button onClick={this.handleLogout}>Log out!</button>
      </div>
    );
  }
}
