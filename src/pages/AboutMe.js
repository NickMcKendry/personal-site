import React, { Component } from 'react';

import './styles/App.css'

export default class AboutMe extends Component {
  render() {
    return(
      <div className="container about-me">
        <h1>About Me</h1>
        <p>Hey there, my name is Nick McKendry and I am a Full Stack Web Developer born and raised in beautiful Colorado. I graduated from Galvanize's Immersive Web Development program in July 2017. Growing up in Colorado I learned to love the outdoors and I have always enjoyed taking things apart and putting them back together. I am mildly obsessed with cars and have recently found a new love for Web Development, the problem solving skills I learned while working on cars is easily transferrable to coding. I also strive to never stop learning new things, there is no better feeling than learning something new and really starting to understand it at a higher level. While at Galvanize I did learn many good coding practices and skills, but the most important skill I learned was how to learn! I believe I am fully capable of teaching myself anything I desire to know and I strive to never stop learning new things and I am not afraid to dive into something new and immerse myself until I full understand it! At the moment my favorite technologies for web Development are JavaScript using React and Meteor, here is a full list of all of the technologies I am comfortable with using:</p>

        <wrapper className="lists row">
            <ul className="list1 col-md-3 col-sm-3">
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Angularjs</li>
              <li>jQuery</li>

            </ul>
            <ul className="list2 col-md-3 col-sm-3">
              <li>Express</li>
              <li>Knex</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>scoket.io</li>
            </ul>
            <ul className="list3 col-md-3 col-sm-3">
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>Gulp</li>
              <li>Adobe Illustrator</li>
            </ul>
            <ul className="list4 col-md-3 col-sm-3">
              <li>CLI</li>
              <li>Mongo</li>
              <li>Meteor</li>
              <li>Agile Workflow</li>
              <li>ES6</li>
            </ul>
          </wrapper>

      </div>
    )
  }
}
