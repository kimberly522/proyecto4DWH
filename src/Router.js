import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../src/assets/Script/Frontend/Components/Login";
import Error from "../src/assets/Script/Frontend/Components/Error";
import Home from "../src/assets/Script/Frontend/Components/Home";
import User from "../src/assets/Script/Frontend/Components/User";
import Region from "../src/assets/Script/Frontend/Components/Region";
import Company from "../src/assets/Script/Frontend/Components/Company";
import Contact from "./assets/Script/Frontend/Components/Contact";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/User" component={User} />
          <Route exact path="/Region" component={Region} />
          <Route exact path="/Company" component={Company} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
