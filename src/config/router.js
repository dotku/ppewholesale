import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Mask from "../components/mask";
import Glove from "../components/glove";
import Partners from "../components/connections/partners";
import Clients from "../components/connections/clients";
import Orders from "../components/orders";
import Sources from "../components/sources/index";
import SourcesWarning from "../components/sources/indexWarning";
import SourceSafe from "../components/sources/indexSafe";
import ProfileIndex from "../components/profile";
import Paperbase from "../components/paperbase/Paperbase";
import Profile from "../components/instapaper/pages/instapaper/Profile";
import Order from "../components/order";
import Home from "../components/home";
import Gloves from "../components/vendors/gloves";

const routers = [
  { path: "/", component: Home, exact: true },
  { path: "/glove", component: Glove, exact: true },
  { path: "/home", component: Home, exact: true },
  { path: "/mask", component: Mask, exact: true },
  { path: "/order", component: Order, exact: true },
  { path: "/instapaper", component: Profile, exact: true },
  { path: "/paperbase", component: Paperbase, exact: true },
  { path: "/price/gloves", component: Gloves, exact: true },
  { path: "/profiles/:name", component: ProfileIndex, exact: true },
  { path: "/connections", components: [Partners, Clients], exact: true },
  { path: "/connections/clients", component: Clients, exact: true },
  { path: "/connections/partners", component: Partners, exact: true },
  { path: "/order", component: Orders, exact: true },
  { path: "/sources", component: Sources, exact: true },
  { path: "/sources/safe", component: SourceSafe, exact: true },
  { path: "/sources/warning", component: SourcesWarning, exact: true },
];

export default function RouterIndex() {
  return (
    <Router>
      <Switch>
        {routers.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        {/* <Route path="/catelog">
              <Catelog />
            </Route> */}

        <Route path="/mask" exact>
          <Mask />
        </Route>
        <Route path="/order" exact>
          <Order />
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
          <Partners />
          <Clients />
        </Route>
        <Route path="/connections/partners">
          <Partners />
        </Route>
        <Route path="/connections/clients">
          <Clients />
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
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes({ path, exact, component: Component, components }) {
  // console.log(component);
  return (
    <Route path={path} exact={exact}>
      {components && components.map((ChildComponent, idx) => <ChildComponent key={idx} />)}
      {Component && <Component />}
    </Route>
  );
}
