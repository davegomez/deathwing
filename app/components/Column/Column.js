import React, { PropTypes } from 'react';
import css from './Column.scss';

const Column = ({ children }) =>
  <div className="col-xs-12 col-sm-4">
    {children}
  </div>;

Column.propTypes = {
  children: PropTypes.node
};

export default Column;
