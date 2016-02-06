import React, { PropTypes } from 'react';
import { UserCard } from '../';
import css from './_avatar.scss';

export default class Avatar extends React.Component {
  static propTypes = {
    userImageURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css.avatar}>
        <img src={this.props.userImageURL} alt={this.props.userName} />
        <UserCard userData={this.props} />
      </div>
    );
  }
}
