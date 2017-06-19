import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Layout from './pages/Layout';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ContactMe from './pages/ContactMe'

import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={Layout} />
      <Route path='/AboutMe' component={AboutMe} />
      <Route path='/Projects' component={Projects} />
      <Route path='/Resume' component={Resume} />
      <Route path='/ContactMe' component={ContactMe} />

    </div>
  </Router>,
  document.getElementById('root'));
