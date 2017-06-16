import React, { Component } from 'react';

import Footer from '../components/Footer.js'



export default class ContactMe extends Component {
  render() {
    return(
      <div className="container">
        <h1>Contact Me!</h1>
        <h2><a href="https://github.com/NickMcKendry">GitHub</a></h2>
        <h2><a href="https://www.linkedin.com/in/nickmckendry/">LinkedIn</a></h2>
        <h2>Email: nickmckendry@gmail.com</h2>
      </div>
    )
  }
}
