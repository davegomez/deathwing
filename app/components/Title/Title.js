import React, { PropTypes } from 'react';
import classnames from 'classnames';
import css from './Title.scss';

const Title = ({ children, className, ...otherProps }) =>
  <h2
    {...otherProps}
    className={classnames(className, css.title)}
  >
    {children}
  </h2>;

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Title;
