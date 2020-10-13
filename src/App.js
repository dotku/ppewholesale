import "./App.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/performance";
import firebaseConfig from "./config/firebase";
import Footer from "./components/common/footer";
import React from "react";
import rootReducer from "./reducers";
import RouterIndex from "./config/router";
import thunkMiddleware from "redux-thunk";
import Top from "./components/common/top";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.performance();
}
firebase.auth().onAuthStateChanged((rspUser) => {
  // console.log("firebase init auth", rspUser);
  store.dispatch({ type: "LOGIN", payload: rspUser });
});

function App() {
  // const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted
  // price:%0D%0Atargeted location:%0D%0A`;
  // const deviceType = parser(req.headers['user-agent']).device.type || 'desktop';
  return (
    <Provider store={store}>
      <div className="App">
        <Top />
        <RouterIndex />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
