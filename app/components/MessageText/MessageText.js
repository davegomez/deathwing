import React, { PropTypes } from 'react';
import css from './MessageText.scss';

class Message extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className={css.text}>
        {this.props.message}
      </p>
    );
  }
}

export default Message;
