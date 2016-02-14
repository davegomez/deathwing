import React, { PropTypes } from 'react';
import css from './Icon.scss';

const PREFIX = '/assets/icons/';

const icons = {
  export: `${PREFIX}export.svg`,
  navicon: `${PREFIX}navicon.svg`,
  plusBig: `${PREFIX}plus-big.svg`,
  plusSmall: `${PREFIX}plus-small.svg`,
  remove: `${PREFIX}remove.svg`,
  share: `${PREFIX}share.svg`,
  signOut: `${PREFIX}sign-out.svg`,
  upload: `${PREFIX}upload.svg`
};

export default class Icon extends React.Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className={css.icon} src={icons[this.props.iconName]} alt="" />
    );
  }
}
