import React, { PropTypes } from 'react';
import { Icon } from './..';
import css from './NavigationMenu.scss';

const NavigationItem = ({ iconName, type }) =>
  <button className={css[type]}>
    <Icon iconName={iconName} />
  </button>;

const NavigationMenu = props =>
  <div className={css.container}>
    <NavigationItem iconName="navicon" type="large" />
    <NavigationItem iconName="upload" type="small" />
    <NavigationItem iconName="export" type="small" />
    <NavigationItem iconName="share" type="small" />
    <NavigationItem iconName="remove" type="small" />
    <NavigationItem iconName="signOut" type="small" />
  </div>;

NavigationMenu.propTypes = {
  children: PropTypes.node
};

export default NavigationMenu;
