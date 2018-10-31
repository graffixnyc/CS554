import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import logger from 'redux-logger';

// We create a store with our combined reducers and add the logger middleware
// Note: Open your dev tools to see how the state changes
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
