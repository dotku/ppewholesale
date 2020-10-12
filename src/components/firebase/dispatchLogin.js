import React from "react";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const fetchUser = () => {
  return async (dispatch) => {
    firebase.auth().onAuthStateChanged((rspUser) => {
      console.log(rspUser);
      dispatch({ type: "LOGIN", payload: rspUser });
    });
  };
};

export default function DispatchLogin() {
  const dispatch = useDispatch();

  // if (user) {
  //   admin.initializeApp({
  //     credential: admin.credential.refreshToken(user.refreshToken),
  //     databaseURL: "https://ppewholesale-27c61.firebaseio.com",
  //   });
  // }

  useEffect(() => {
    (async () => {
      // if (!firebase.apps.length) {
      //   firebase.initializeApp(firebaseConfig);
      //   // console.log(admin.auth());
      // }
      const user = firebase.auth().currentUser;
      console.log("currentUser", user);
    })();
    //  console.log(fetchUser()());
    firebase.auth().onAuthStateChanged((rspUser) => {
      console.log(rspUser);
      dispatch({ type: "LOGIN", payload: rspUser });
    });
    // dispatch(fetchUser());
  }, []);

  return null;
}
