import React, { PropTypes } from 'react';
import css from './UserTooltip.scss';

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
      <div className={css.tooltip}>
        <p className={css.userName}>{this.props.userName}</p>
        <p className={css.userEmail}>{this.props.userEmail}</p>
      </div>
    );
  }
}
