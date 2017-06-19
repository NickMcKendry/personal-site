import React, { Component } from 'react';
import '../../pages/styles/App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



export default class Title extends Component {
  render() {
    return (
      <div className="page-header row">
          <Link to='/aboutme'><img  src={require("./logo.png")} className="col-md-2 col-sm-2 col-xs-2"></img></Link>
          <h1 className="col-md-10 col-sm-10 col-xs-2 title-text">Nick McKendry<small className="change-text">  {this.props.title}  </small> </h1>
      </div>
    );
  }
}
