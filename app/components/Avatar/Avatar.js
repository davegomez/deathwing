import React, { PropTypes } from 'react';
import { UserTooltip } from '../';
import './Avatar.scss';

export default class Avatar extends React.Component {
  static propTypes = {
    userImageURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'avatar'}>
        <img
          src={this.props.userImageURL}
          alt={this.props.userName}
        />
        <UserTooltip
          userName={this.props.userName}
          userEmail={this.props.userEmail}
        />
      </div>
    );
  }
}
