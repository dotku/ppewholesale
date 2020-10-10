import { Container } from "@material-ui/core";
import * as firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Logout() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(useSelector(({ auth }) => auth));
  const [ifRedirect, setIfRedirect] = useState(false);
  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logout successfully");
        dispatch({ type: "LOGOUT" });
        setUser(null);
      });
    setTimeout(() => {
      if (!user) {
        setIfRedirect(true);
      }
    }, 3000);
  }, [user]);

  return ifRedirect ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <Container className="main">
      Logout successfully, the page will redirect to home page after 3 secs.
    </Container>
  );
}
