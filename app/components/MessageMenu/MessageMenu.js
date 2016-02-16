import React from 'react';
import { Icon } from '../';
import css from './MessageMenu.scss';

class MessageMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'menu'}>
        <button className={css.button}>
          <Icon iconName="edit" />
        </button>
        <button className={css.button}>
          <Icon iconName="removeBig" />
        </button>
      </div>
    );
  }
}

export default MessageMenu;