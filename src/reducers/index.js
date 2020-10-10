import { combineReducers } from "redux";
import todos from "./todos";
import sources from "./sources";
import auth from "./auth";

export default combineReducers({
  auth,
  todos,
  sources,
});
