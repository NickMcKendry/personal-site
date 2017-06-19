import React, { Component } from 'react';

import Footer from '../components/Footer.js'

export default class Projects extends Component {
  render() {
    return(
      <div className="container">
        <h1>My Projects</h1>
        <div className="row">
          <div className="well col-md-4">
            <h2><a href="https://sound-flick.firebaseapp.com/">Sound Flick</a></h2>
            <p>Sound Flick is an audio visualizer and Spotify playlist generator, the user can type in as many artists as desired in a comma separated list to generate a random spotify playlist and watch my visualizer dance to the music, built with: JavaScript, HTML, CSS, Web Audio API, Spotify API, and deployed on firebase.</p>
            <h3><a href="https://github.com/NickMcKendry/sound_flick">GitHub Link </a></h3>
          </div>
          <div className="well col-md-4">
            <h2><a href="https://agile-overload.herokuapp.com/">Agile Overload</a></h2>
            <p>Agile Overload is a multiplayer team-building game based on Agile-workflow concepts. Each player gets their own set of commands and buttons and you must work as a team to race the timer before funding runs out. The technologies we used are JavaScript, socket.io, PostgreSQL, Express, Knexjs, NodeJs, HBS, and Bcrypt.</p>
            <h3><a href="https://github.com/ES46/overload-game">GitHub Link </a></h3>
          </div>
          <div className="well col-md-4">
            <h2><a href="https://yourspce.herokuapp.com/">YourSpace</a></h2>
            <p>YourSpace is an app made for managing any sort of collective work space, an admin can go in and setup user accounts and add rooms to the database and manage any sort of info or data they want to store on users or rooms. Technologies we used are Meteor, ReactJs, Blaze, JavaScript, React-router, and MongoDB.</p>
            <h3><a href="https://github.com/Brad-Peach-and-the-Pitt/yourspace">GitHub Link </a></h3>
          </div>

        </div>
      </div>
    )
  }
}
