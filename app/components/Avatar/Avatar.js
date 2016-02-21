import React, { PropTypes } from 'react';
import { Icon } from '../';
import css from './Avatar.scss';

const Counter = ({ count }) =>
  <div className={css.container}>
    <button className={css.counter}>
      {count}
    </button>
  </div>;

const Tooltip = ({ userName, userEmail }) =>
  <div className={css.tooltip}>
    <p className={css.userName}>
      {userName}
    </p>
    <p className={css.userEmail}>
      {userEmail}
    </p>
  </div>;

class Avatar extends React.Component {
  static propTypes = {
    userImageURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const count = this.props.votes > 0 ?
      this.props.votes :
      <Icon iconName="plusSmall" />;

    return (
      <div className={css.avatar}>
        <img className={css.userImage}
          src={this.props.userImageURL}
          alt={this.props.userName}
        />
        <Counter count={count} />
        <Tooltip
          userName={this.props.userName}
          userEmail={this.props.userEmail}
        />
      </div>
    );
  }
}

export default Avatar;
