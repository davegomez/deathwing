import React, { PropTypes } from 'react';
import css from './_userCard.scss';

export default class UserCard extends React.Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.card}>
        <p className={css.userName}>{this.props.userName}</p>
        <p className={css.userEmail}>{this.props.userEmail}</p>
      </div>
    );
  }
}
