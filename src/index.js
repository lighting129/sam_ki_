import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import Login from "./views/login";
import SignUp from "./views/sign-up";
import NotFound from "./views/not-found";
import Dashboard from "./views/Dashboard";
import Report from "./views/Report";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={NotFound} path="**" />
        <Route component={Report} path="/Report" />
        <Route component={Dashboard} path="/Dashboard" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
