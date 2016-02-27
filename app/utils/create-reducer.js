/**
 * Creates a new reducer based in a configuration object where each property
 Add a comment to this line
 * is a function that matches an action type.
 * @param {object} config Set of functions to match with the actions.
 * @param {object} [initialState] Default state value.
 * @returns {function} Generated reducer.
 */
export default (config, initialState = {}) => (state = initialState, action = {}) => {
  const { type = '' } = action;

  if (typeof config[type] === 'function') {
    return config[type](state, action);
  }

  return state;
};
