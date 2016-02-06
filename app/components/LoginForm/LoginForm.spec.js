import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';

describe('LoginForm component', () => {
  it('should be tested with Enzyme', () => {
    const wrapper = shallow(<LoginForm />);
  });
});
