import { setTokenId } from '../../app/actions/actionCreators';
import expect from 'expect';
import loggedUser from '../../app/reducers/loggedUser';

describe('loggedUser reducer', () => {
  it('should return a initial state if state is not set', () => {
    expect(loggedUser(undefined, {})).toEqual({
      tokenId: false
    });
  });

  it('should change the tokenId when setTokenId action is sent', () => {
    expect(loggedUser({ foo: 'bar' }, setTokenId('token'))).toEqual({
      foo: 'bar',
      tokenId: 'token'
    });
  });
});
