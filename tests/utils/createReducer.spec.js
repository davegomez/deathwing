import createReducer from '../../app/utils/create-reducer';
import expect from 'expect';

const FOO = 'FOO';
const BAR = 'BAR';

const initialState = {
  bar: '',
  baz: ''
};

const reducerConfig = {
  [FOO]: (state, action) => ({
    ...state,
    foo: action.foo
  }),

  [BAR]: (state, action) => ({
    ...state,
    bar: action.bar
  })
};

const reducer = createReducer(reducerConfig, initialState);

describe('createReducer Util', () => {
  it('should return the initial state if the state is undefined', () => {
    expect(reducer(undefined, {})).toEqual({ bar: '', baz: '' });
  });

  it('should modify the state through actions', () => {
    const state = { baz: 'baz' };
    const fooAction = { type: FOO, foo: 'foo-foo' };
    const barAction = { type: BAR, bar: 'bar-bar' };

    expect(reducer(state, fooAction)).toEqual({ baz: 'baz', foo: 'foo-foo' });
    expect(reducer(state, barAction)).toEqual({ baz: 'baz', bar: 'bar-bar' });
  });

  it('should not change the state if the action does not match', () => {
    const state = { foo: 'bar' };

    expect(reducer(state, { type: 'BAZ' })).toEqual(state);
  });
});
