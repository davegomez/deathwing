import React, { PropTypes } from 'react';
import css from './Row.scss';

const Row = ({ children }) =>
  <div className="row">
    {children}
  </div>;

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
