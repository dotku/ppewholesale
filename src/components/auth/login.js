import React from "react";
import * as firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useSelector } from "react-redux";
import { Button, Container, Typography } from "@material-ui/core";

export default function Login({ uiConfigNew = {} }) {
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
  return (
    <Container className="main">
      {!user ? (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <>
          <Typography>Welcome, {user.displayName}!</Typography>
          <Button href="#/logout">Logout</Button>
        </>
      )}
    </Container>
  );
}
