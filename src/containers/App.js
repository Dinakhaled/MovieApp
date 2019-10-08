import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import List from "../components/list/List";
// ========== General styles ==========
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";

const list = [
  { content: "one", icon: "", id: 1 },
  { content: "two", icon: "", id: 2 },
  { content: "three", icon: "", id: 3 }
];

const App = () => {
  return (
    <Router history={history}>
      <List list={list} />
      {Routes}
    </Router>
  );
};

export default App;
