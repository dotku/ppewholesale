// import ProfileInstapaper from "../components/instapaper/pages/instapaper/Profile";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../components/admin";
import Auth from "../components/lab/auth";
import Clients from "../components/connections/clients";
import Glove from "../components/glove";
import Gloves from "../components/vendors/gloves";
import Home from "../components/home";
import Login from "../components/auth/login";
import Logout from "../components/auth/logout";
import LOI from "../components/loi";
import Mask from "../components/mask";
import Order from "../components/order";
import Orders from "../components/orders";
import Paperbase from "../components/paperbase/Paperbase";
import Partners from "../components/connections/partners";
import Payment from "../components/payment";
import Profile from "../components/user";
import React from "react";
import ReputationIndex from "../components/reputation";
import Sources from "../components/sources/index";
import SourceSafe from "../components/sources/indexSafe";
import SourcesWarning from "../components/sources/indexWarning";
import Organizations from "../components/organizations";
import Clipboard from "../components/clipboard";
import OrganizationDetail from "../components/organizations/organizationDetail";
import Message from "../components/message";
import Certifications from "../components/certifications";
import ValidatorIndex from "../components/validators";
import ImgurTest from "../components/imgur";
import Search from "../components/search";

function Facebook() {
  return (
    <div className="main" style={{ textAlign: "center" }}>
      Sorry, we don't Support Facebook yet.
    </div>
  );
}

function FacebookNote() {
  return (
    <div className="main">
      <ul>
        <li>2018 - JSX</li>
        <li>2015.09 - GraphQL</li>
        <li>2015.06 - Redux</li>
        <li>2015.03 - Babel</li>
        <li>2014 - Flux</li>
        <li>2013 - React</li>
        <li>2004 - Facebook Launched</li>
      </ul>
    </div>
  );
}

export const routers = [
  { path: "/", component: Home, exact: true },
  { path: "/admin", component: Admin },
  { path: "/certifications", component: Certifications },
  { path: "/clipboard", component: Clipboard },
  { path: "/connections", components: [Partners, Clients], exact: true },
  { path: "/connections/clients", component: Clients, exact: true },
  { path: "/connections/partners", component: Partners, exact: true },
  {
    path: "/facebook",
    component: Facebook,
    exact: true,
  },
  {
    path: "/facebook/note",
    component: FacebookNote,
    exact: true,
  },
  { path: "/glove", component: Glove, exact: true },
  { path: "/home", component: Home, exact: true },
  { path: "/instapaper", component: Profile, exact: true },
  { path: "/imgur", component: ImgurTest, exact: true },
  { path: "/lab/auth", component: Auth },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/loi", component: LOI },
  { path: "/mask", component: Mask, exact: true },
  { path: "/message/:id", component: Message, exact: true },
  { path: "/order", component: Order, exact: true },
  { path: "/order", component: Orders, exact: true },
  { path: "/organizations", component: Organizations, exact: true },
  {
    path: "/organizations/:name-:id",
    component: OrganizationDetail,
    exact: true,
  },
  { path: "/paperbase", component: Paperbase, exact: true },
  { path: "/payment/:value", component: Payment, exact: true },
  { path: "/price/gloves", component: Gloves, exact: true },
  { path: "/profile", component: Profile, exact: true },
  { path: "/reputation", component: ReputationIndex },
  { path: "/search", component: Search },
  { path: "/sign-in", component: Login },
  { path: "/sources", component: Sources, exact: true },
  { path: "/sources/safe", component: SourceSafe, exact: true },
  { path: "/sources/warning", component: SourcesWarning, exact: true },
  { path: "/validators", component: ValidatorIndex },
  { component: Search, status: 404 }, // must be final row for 404
];

export default function RouterIndex() {
  return (
    <Router>
      <Switch>
        {routers.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes({
  path,
  exact = true,
  component: Component,
  components,
}) {
  console.log("exact", exact);
  return (
    <Route path={path} exact={exact}>
      {components &&
        components.map((ChildComponent, idx) => <ChildComponent key={idx} />)}
      {Component && <Component />}
    </Route>
  );
}
