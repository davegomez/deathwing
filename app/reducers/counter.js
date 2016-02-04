import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from '../actions/action-creators';

const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, count: state.count + 1 };

    case DECREASE_COUNTER:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
