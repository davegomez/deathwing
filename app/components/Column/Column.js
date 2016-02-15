import React, { PropTypes } from 'react';
import css from './Column.scss';

const Column = ({ children }) =>
  <div className="col-sm-4"> {children} </div>;

Column.propTypes = {
  children: PropTypes.object
};

export default Column;
