import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./Components/User";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/user">  User</Link>
          <Link to="/contactus">   ContactUs</Link>
        </li>
      </ul>
    </div>

    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/contactus" component={ContactUs} />
      <Route component={Error} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
