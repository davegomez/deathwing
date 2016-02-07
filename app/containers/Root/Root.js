import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginForm } from '../../components';
import { } from '../../actions/action-creators';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

Root.propTypes = {

};

export default connect(
  () => ({

  }),
  () => ({

  })
)(Root);
