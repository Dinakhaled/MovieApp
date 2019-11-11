import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import Loader from "../components/loader/Loader";
// ========= Components =========
const HomePage = React.lazy(() => import("../containers/homePage/HomePage"));
const DetailsPage = React.lazy(() =>
  import("../containers/detailsPage/DetailsPage")
);
const PersonDetails = React.lazy(() =>
  import("../containers/personDetails/PersonDetails")
);
const NotFoundPage = React.lazy(() => import("../components/empty/Empty"));

const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <HomePage path="/" exact />
        <DetailsPage path="/movie/:id" />
        <PersonDetails path="/person/:id" />
        <NotFoundPage title="This doesn't exist..." path="**" />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
