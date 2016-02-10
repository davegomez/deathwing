import React from 'react';
import UserCard from './UserTooltip';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { shallow } from 'enzyme';

describe('UserCard component', () => {
  it('should exist', () => {
    const wrapper = shallow(<UserCard />);

    expect(wrapper.is('div')).toExist();
  });

  it('should have the className card', () => {
    const wrapper = shallow(<UserCard />);

    // expect(wrapper.is('div.card')).toExist();
  });
});
