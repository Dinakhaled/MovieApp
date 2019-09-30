import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import history from "./History";
// ========= Components =========
const HomePage = React.lazy(() => import('../containers/homePage/HomePage'));

const Routes = (
  <Suspense fallback={<p>loading...</p>}>
  <Router history={history}>
    <Switch>
      <HomePage path="/" />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
  </Suspense>
);

export default Routes;