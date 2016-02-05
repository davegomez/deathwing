import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import Root from './containers/Root/Root';
import reducers from './reducers/reducers';

const reduxRouterMiddleware = syncHistory(browserHistory);
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware,
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(reducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers/reducers', () => {
    const nextRootReducer = require('./reducers/reducers').default;
    store.replaceReducer(combineReducers({
      ...nextRootReducer,
      routing: routeReducer
    }));
  });
}

const app = document.createElement('div');
document.body.appendChild(app);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/"
             component={Root} />
    </Router>
  </Provider>,
  app
);
