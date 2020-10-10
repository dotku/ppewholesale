import React from "react";
import * as firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Typography } from "@material-ui/core";

export default function Login({ uiConfigNew = {} }) {
  const dispatch = useDispatch();
  const uiConfig = Object.assign(
    {
      signInSuccessUrl: "#/login",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
    },
    uiConfigNew
  );
  const user = useSelector((state) => state.auth);
  console.log("Login user", user, firebase.apps, firebase.auth().currentUser);
  // firebase
  //   .auth()
  //   .getRedirectResult()
  //   .then((result) => {
  //     console.log("redirectResult", result);
  //     if (result.credential) {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       var token = result.credential.accessToken;
  //       // ...
  //     }
  //     // The signed-in user info.
  //     var user = result.user;
  //   })
  //   .catch(function (error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     var email = error.email;
  //     // The firebase.auth.AuthCredential type that was used.
  //     var credential = error.credential;
  //     // ...
  //   });
  return (
    <Container className="main">
      {!user ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        // JSON.stringify(user)
        <>
          <Typography>Welcome, {user.displayName}!</Typography>
          <Button href="#/logout">Logout</Button>
        </>
      )}
    </Container>
  );
}
