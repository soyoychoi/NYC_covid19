import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import indexRoutes from "./routes/index.jsx";
import AppNavBar from "./components/AppNavBar.jsx";
import AppFooter from "./components/AppFooter.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <AppNavBar></AppNavBar>
    {indexRoutes.map((prop, key) => {
      return (
        <div>
          <Route
            exact
            path={prop.path}
            key={key}
            component={prop.component}
          ></Route>
        </div>
      );
    })}
    <AppFooter />
  </Router>,
  document.getElementById("root")
);
