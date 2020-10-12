import { combineReducers } from "redux";
import todos from "./todos";
import sources from "./sources";
import auth from "./auth";
import posts from "./posts";
import firebase from "firebase/app";
import firebaseConfig from "../config/firebase";

export default combineReducers({
  auth,
  posts,
  sources,
  todos,
});
