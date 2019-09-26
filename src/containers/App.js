import React from 'react';
import { Router } from 'react-router-dom';
import history from '../routes/History';
import Routes from '../routes/Routes';
// ========== General styles ==========
import './App.scss';

const App = () => {
  return(
    <Router history={history}>
      {Routes}   
    </Router>
  )
}

export default App;