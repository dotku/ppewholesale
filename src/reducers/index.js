import { combineReducers } from "redux";
import todos from "./todos";
import sources from "./sources";
import auth from "./auth";
import postfiles from "./postfiles";
import posts from "./posts";
import users from "./users";

export default combineReducers({
  auth,
  posts,
  sources,
  todos,
  users,
  postfiles,
});
