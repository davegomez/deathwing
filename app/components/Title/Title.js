import React, { PropTypes } from 'react';
import classnames from 'classnames';
import css from './Title.scss';

const Title = ({ children, className, ...otherProps }) =>
  <div className={classnames(className, css.container)}>
    <h2 {...otherProps} className={css.title}>
      {children}
    </h2>
  </div>;

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Title;
