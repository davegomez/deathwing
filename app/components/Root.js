import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  increaseCounter,
  decreaseCounter
} from '../actions/action-creators';

import '../styles/_base.scss';
import './Root.scss';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, actions } = this.props;
    return (
      <div className="container">
        <h1>Hello Counter!!! {count}</h1>
        <button onClick={actions.increaseCounter}>Increase</button>
        <button onClick={actions.decreaseCounter}>Decrease</button>
      </div>
    );
  }
}

Root.propTypes = {
  count: PropTypes.number,
  actions: PropTypes.object
};

export default connect(
  state => ({
    count: state.counter.count
  }),
  dispatch => ({
    actions: bindActionCreators({
      increaseCounter,
      decreaseCounter
    }, dispatch)
  })
)(Root);
