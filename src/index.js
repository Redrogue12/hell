import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import './index.scss';
import App from './App';
import Quizes from '././views/Quizes/Quizes';
import Navbar from '././components/Navbar/Navbar';

const routing = (
  <Router>
    <Navbar />
    <div>
      <Route exact path="/" component={App} />
      <Route path="/quizes" component={Quizes} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
