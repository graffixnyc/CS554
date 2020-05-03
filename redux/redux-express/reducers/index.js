const redux = require('redux');
const userReducer = require('./users');
const postReducer = require('./posts');
const counter = require('./counter');

const reducers = redux.combineReducers({
  user: userReducer,
  posts: postReducer,
  counter: counter
});

module.exports = reducers;
