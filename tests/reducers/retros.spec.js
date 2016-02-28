import expect from 'expect';
import retros from '../../app/reducers/retros';

describe('Retros reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(retros(undefined, {})).toEqual([]);
  });

  it('should not do anything if the action does not change the state', () => {
    expect(retros({ foo: 'bar' }, { type: 'FOO' })).toEqual({
      foo: 'bar'
    });
  });
});
