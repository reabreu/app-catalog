import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { TopNav } from "../header";
import { CatalogProvider } from "../state/catalog-context";

const Catalog = lazy(() => import("../catalog"));
const AppDetails = lazy(() => import("../app-details"));
const NotFound = lazy(() => import("../404"));

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default () => (
  <CatalogProvider>
    <Router>
      <TopNav />
      <AppContainer>
        <Suspense fallback={""}>
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/app/:id" component={AppDetails} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Suspense>
      </AppContainer>
    </Router>
  </CatalogProvider>
);
