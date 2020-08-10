import React from "react";
import "./App.css";
import Home from "./components/home"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Catelog } from "./components/catelog";

function App() {
  const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted price:%0D%0Atargeted location:%0D%0A`;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/catelog">
            <Catelog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
