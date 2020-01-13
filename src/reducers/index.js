import { combineReducers } from "redux";
import counterReducer from "./countReducer";

const allReducers = combineReducers({
  counter: counterReducer
});
export default allReducers;
