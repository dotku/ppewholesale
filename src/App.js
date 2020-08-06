import React from "react";
import "./App.css";
import Home from "./components/home"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Gloves from "./components/vendors/gloves";
import Top from "./components/common/top";
import Order from "./components/order";
import Footer from "./components/common/footer";

function App() {
  // const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted price:%0D%0Atargeted location:%0D%0A`;
  return (
      <Router>
        <div className="App">
          <Top />
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/home" exact>
              <Home/>
            </Route>
            {/* <Route path="/catelog">
              <Catelog />
            </Route> */}
            <Route path="/gloves" exact>
              <Gloves />
            </Route>
            <Route path="/order" exact>
              <Order/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
