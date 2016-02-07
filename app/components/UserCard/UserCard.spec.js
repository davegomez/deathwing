import React from 'react';
import UserCard from './UserCard';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { shallow } from 'enzyme';

describe('UserCard component', () => {
  it('should be tested with Enzyme', () => {
    const wrapper = shallow(<UserCard userName="foo" userEmail="bar" />);
  });
});
