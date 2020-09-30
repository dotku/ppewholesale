import React from "react";
import "./App.css";
import Home from "./components/home"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Gloves from "./components/vendors/gloves";
import Top from "./components/common/top";
import Order from "./components/order";
import Footer from "./components/common/footer";
import Mask from "./components/mask";
import Glove from "./components/glove";
import Partners from "./components/connections/partners";
import Clients from "./components/connections/clients";
import Orders from "./components/orders";
import Sources from "./components/sources/index";
import SourcesWarning from "./components/sources/indexWarning";
import SourceSafe from "./components/sources/indexSafe";
import ProfileIndex from "./components/profile";
import Paperbase from "./components/paperbase/Paperbase";
import Profile from "./components/instapaper/pages/instapaper/Profile";

function App() {
  // const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted
  // price:%0D%0Atargeted location:%0D%0A`;
  // const deviceType = parser(req.headers['user-agent']).device.type || 'desktop';
  
  return (
      <Router>
        <div className="App">
          <Top />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/glove" exact>
              <Glove/>
            </Route>
            <Route path="/home" exact>
              <Home/>
            </Route>
            <Route path="/instapaper" exact>
              <Profile />
            </Route>
            {/* <Route path="/catelog">
              <Catelog />
            </Route> */}
            
            <Route path="/mask" exact>
              <Mask />
            </Route>
            <Route path="/order" exact>
              <Order/>
            </Route>
            <Route path="/paperbase" exact>
              <Paperbase />
            </Route>
            <Route path="/price/gloves" exact>
              <Gloves />
            </Route>
            <Route path="/profiles/:name" exact>
              <ProfileIndex />
            </Route>
            
            
            <Route exact path="/connections">
              <Partners/>
              <Clients/>
            </Route>
            <Route path="/connections/partners">
              <Partners/>
            </Route>
            <Route path="/connections/clients">
              <Clients/>
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/sources" exact>
              <Sources />
            </Route>
            <Route path="/sources/safe" exact>
              <SourceSafe />
            </Route>
            <Route path="/sources/warning" exact>
              <SourcesWarning />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
