import expect from 'expect';
import users from '../../app/reducers/users';

describe('Users reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(users(undefined, {})).toEqual([]);
  });

  it('should not do anything if the action does not change the state', () => {
    expect(users({ foo: 'bar' }, { type: 'FOO' })).toEqual({
      foo: 'bar'
    });
  });
});
