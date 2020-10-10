import React from "react";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";

export default function DispatchLogin() {
  const dispatch = useDispatch();
  firebase.auth().onAuthStateChanged((user) => {
    dispatch({ type: "LOGIN", payload: user });
  });
  return null;
}
