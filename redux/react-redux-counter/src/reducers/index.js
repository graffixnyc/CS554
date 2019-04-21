import { combineReducers } from "redux";
import count from "./count.reducer";

const rootReducer = combineReducers({
  count
  // you would add more reducers here for more stateful parts of your app
});

export default rootReducer;
