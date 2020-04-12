import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './views/Dashboard/Dashboard';
import Quizes from './views/Quizes/Quizes';

const App = props => {
  return <Router>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
            <Route path="/quizes">
              <Quizes />
            </Route>
          </Switch>
         </Router>
  
  
};

export default App;
