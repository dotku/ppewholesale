import React from "react";
import DispatchLogin from "./dispatchLogin";
import firebase from "firebase/app";
import firebaseConfig from "../../config/firebase";
import DispatchFirestore from "./dispatchFirestore";

export default function DispatchFirebase() {
  return (
    <>
      <DispatchLogin />
      <DispatchFirestore />
    </>
  );
}
