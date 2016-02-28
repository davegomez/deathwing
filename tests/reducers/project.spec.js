import expect from 'expect';
import project from '../../app/reducers/project';

describe('Users reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(project(undefined, {})).toEqual({
      name: '',
      slug: ''
    });
  });

  it('should not do anything if the action does not change the state', () => {
    expect(project({ foo: 'bar' }, { type: 'FOO' })).toEqual({
      foo: 'bar'
    });
  });
});
