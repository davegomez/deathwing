import React, { PropTypes } from 'react';
import { Avatar, MessageText, MessageInput } from '../';
import css from './Message.scss';

export default class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    userImageURL: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={css.message}>
        <div className={css.messageText}>
          <MessageInput message={this.props.message} />
        </div>
        <div className={css.messageAvatar}>
          <Avatar
            userImageURL={this.props.userImageURL}
            userName={this.props.userName}
            userEmail={this.props.userEmail}
          />
        </div>
      </section>
    );
  }
}
