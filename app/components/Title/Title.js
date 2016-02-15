import React, { PropTypes } from 'react';
import css from './Title.scss';

const Title = ({ children }) =>
  <h2>{children}</h2>;

Title.propTypes = {
  children: PropTypes.node
};

export default Title;
