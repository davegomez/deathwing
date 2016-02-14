import React, { PropTypes } from 'react';
import { UserTooltip, Counter } from '../';
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
        <img className={'user-image'}
          src={this.props.userImageURL}
          alt={this.props.userName}
        />
        <Counter count={0} />
        <UserTooltip
          userName={this.props.userName}
          userEmail={this.props.userEmail}
        />
      </div>
    );
  }
}
