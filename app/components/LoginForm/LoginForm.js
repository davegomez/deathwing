import React from 'react';

export default () => (
  <form>
    <h1>Sign In</h1>
    <label>
      <span>Username</span>
      <input type="text" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" />
    </label>
    <button type="submit">Login!</button>
  </form>
);
