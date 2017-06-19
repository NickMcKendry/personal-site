import React, { Component } from 'react';
import '../pages/styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Title from './header/Title'

export default class Header extends Component {


  render() {

    return (
      <div>
        <Title title={this.props.title} />
        <div className="row well navbar ">
          <h4 className="col-md-3"><Link to="/aboutme"><strong>About Me</strong></Link></h4>
          <h4 className="col-md-3"><Link to="/projects"><strong>My Projects</strong></Link></h4>
          <h4 className="col-md-3"><Link to="/resume"><strong>Résumé</strong></Link></h4>
          <h4 className="col-md-3"><Link to="/contactme"><strong>Contact Me!</strong></Link></h4>
        </div>
      </div>
    );
  }
}
