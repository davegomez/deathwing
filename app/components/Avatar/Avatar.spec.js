import React from 'react';
import Avatar from './Avatar';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { shallow } from 'enzyme';

describe('Avatar component', () => {
  it('should be tested with Enzyme', () => {
    const wrapper = shallow(<Avatar />);
  });
});
