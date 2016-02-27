import React, { PropTypes } from 'react';
import classnames from 'classnames';
import css from './Intent.scss';

const Intent = ({ children, title, className, ...otherProps }) =>
  <div className="col-xs-12 col-sm-4">
    <div className={classnames(className, css.container)}>
      <h2 {...otherProps} className={css.text}>
        {title}
      </h2>
    </div>
    {children}
  </div>;

Intent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Intent;
