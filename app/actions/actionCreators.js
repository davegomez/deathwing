export const SET_TOKEN_ID = 'SET_TOKEN_ID';
export const setTokenId = tokenId => ({ type: SET_TOKEN_ID, tokenId });

export const ADD_VOTE = 'ADD_VOTE';
export const addVote = userId => ({ type: ADD_VOTE, userId });

export const REMOVE_VOTE = 'REMOVE_VOTE';
export const removeVote = userId => ({ type: REMOVE_VOTE, userId });
