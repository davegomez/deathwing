import * as ac from '../../app/actions/actionCreators';
import expect from 'expect';

describe('Action Creators', () => {
  it('should test SET_TOKEN_ID action creator', () => {
    expect(ac.setTokenId('foo')).toEqual({
      type: ac.SET_TOKEN_ID,
      tokenId: 'foo'
    });
  });
});
