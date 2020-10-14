// const userPromise = new Promise((rsv, rej) => {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
//   firebase.auth().onAuthStateChanged((user) => {
//     console.log("user", user);
//     rsv(user);
//   });
// });

const auth = (state = null, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      // const rspUser = userPromise();
      // console.log("LOGIN", payload);
      // state = Object.assign(state || {}, payload);
      // console.log("Login state", state);
      return payload;
    // firebase.auth().onAuthStateChanged((user) => {
    //   console.log("user", user);
    //   return user;
    // });
    // console.log(authRsp());
    // return authRsp;
    // const user = await firebase.auth().login();
    // return user;
    case "UPDATE_USER":
      return {
        ...state,
        ...payload,
      };
    case "LOGOUT":
      console.log("reducer logout");
      return null;
    default:
      return state || null;
  }
};

export default auth;
