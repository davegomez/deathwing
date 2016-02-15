import React, { PropTypes } from 'react';
import css from './MessageInput.scss';

export default class MessageInput extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  finishEdit = () => {};

  checkEnter = () => {};

  render() {
    return (
      <input
        type="text"
        name="message"
        className={css.input}
        defaultValue={this.props.message}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }
}
