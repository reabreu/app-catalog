import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Catalog = lazy(() => import("../catalog"));
const AppDetails = lazy(() => import("../app-details"));
const NotFound = lazy(() => import("../404"));

export default () => (
  <Router>
    <Suspense fallback={"Loading"}>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/app/:id" component={AppDetails} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Suspense>
  </Router>
);
