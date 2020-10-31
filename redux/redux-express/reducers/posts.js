const postsReducer = (state = [], action) => {
  if (action.type === 'ADD_POST') {
    return [...state, action.post];
  }
  return state;
};
module.exports = postsReducer;
