import * as firebase from "firebase";
import firebaseConfig from "../config/firebase";

// const userPromise = new Promise((rsv, rej) => {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
//   firebase.auth().onAuthStateChanged((user) => {
//     console.log("user", user);
//     rsv(user);
//   });
// });

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // console.log(admin.auth());
}

const auth = (state, { type, payload }) => {
  const user = firebase.auth().currentUser;
  // if (user) {
  //   admin.initializeApp({
  //     credential: admin.credential.refreshToken(user.refreshToken),
  //     databaseURL: "https://ppewholesale-27c61.firebaseio.com",
  //   });
  // }
  console.log("currentUser", user);
  switch (type) {
    case "LOGIN":
      // const rspUser = userPromise();

      return payload;
    // firebase.auth().onAuthStateChanged((user) => {
    //   console.log("user", user);
    //   return user;
    // });
    // console.log(authRsp());
    // return authRsp;
    // const user = await firebase.auth().login();
    // return user;
    case "LOGOUT":
      console.log("reducer logout");
      return null;
    default:
      return state || null;
  }
};

export default auth;
