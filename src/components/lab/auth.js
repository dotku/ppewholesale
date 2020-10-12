import React, { useEffect, useState } from "react";
import "firebaseui";
import firebase from "firebase/app";
import "firebaseui/dist/firebaseui.css";
import "firebase/auth";
import "firebase/firestore";
import { Container, Button } from "@material-ui/core";
import firebaseConfig from "../../config/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import ReactJson from "react-json-view";
import { useSelector, useDispatch } from "react-redux";

export default function Auth() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("user", user);
  function Logout() {
    return (
      <Button
        onClick={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              dispatch({ type: "LOGOUT" });
            });
        }}
      >
        Logout
      </Button>
    );
  }
  // firebase.initializeApp(firebaseConfig);
  useEffect(() => {
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    // }
    // ui.start(".main", {
    //   signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    // });
    // firebase.auth().onAuthStateChanged((rspUser) => {
    //   if (rspUser) {
    //     // User is signed in.
    //     // setUser(rspUser);
    //     dispatch({ type: "LOGIN", payload: rspUser });
    //     console.log(rspUser);
    //   } else {
    //     // No user is signed in.
    //   }
    // });
  }, []);

  const uiConfig = {
    //signInFlow: "popup",
    signInSuccessUrl: "#/lab/auth",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
  };

  return (
    <Container>
      <div className="main">
        <div>Auth</div>
        {!user ? (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        ) : (
          <>
            <Logout />
            <ReactJson src={JSON.parse(JSON.stringify(user)) || {}} />
          </>
        )}
      </div>
    </Container>
  );
}
