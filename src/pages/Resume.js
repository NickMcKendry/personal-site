import React, { Component } from 'react';

import './styles/App.css'
import Footer from '../components/Footer.js'


export default class Resume extends Component {
  render() {
    return(
      <div className="container">
        <img src={require("./resume-img.png")} className="col-md-9 col-sm-9 col-xs-9 resume-img"></img>
        <h5 className="col-md-3"><a href="https://drive.google.com/file/d/0BxEwQ8sQS_qpSGFuNS1VaWw2VTA/view?usp=sharing" className="btn btn-info">View/Download as PDF</a></h5>
      </div>
    )
  }
}
