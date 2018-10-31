const countReducer = (state = 0, action) => {
   // We never mutate the state, we always return a new state
   // For array or object operations, use the spread operator [..., ] {..., }
   switch (action.type) {
      case 'INC':
         return state + 1;
      case 'DEC':
         return state - 1;
      case 'SPEC':
         // our counter state now becomes our specified payload
         return action.payload;
      default:
         return state;
   }
};

export default countReducer;
