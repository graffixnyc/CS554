export const incrementCount = () => ({
  type: "INC"
});

export const decrementCount = () => ({
  type: "DEC"
});

/*
   We can give a "payload" that can be used in our reducer
*/
export const specifyCount = num => ({
  type: "SPEC",
  payload: num
});
