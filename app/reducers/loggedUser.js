import createReducer from '../utils/create-reducer';
import { SET_TOKEN_ID } from '../actions/actionCreators';

const initialState = {
  tokenId: false
};

export default createReducer({
  [SET_TOKEN_ID]: (state, { tokenId }) => ({ ...state, tokenId })
}, initialState);
