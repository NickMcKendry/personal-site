import React, { Component } from 'react';
import './styles/App.css';

import Header from '../components/Header'
import Footer from '../components/Footer'

const titles = [
  "React Guru", "JavaScript Developer", "Full Stack Developer", "Galvanize Grad", "Car Nerd", "Node Monster", "Agile Worker", "JavaScript Ninja", "Explorer of Knowledge",
]


export default class Layout extends Component {
  constructor() {
    super()
    this.state = {
      title: "Full Stack Developer"
    }
  }




  render() {
    setTimeout(() => {
      const i = Math.floor(Math.random() * 9)
      this.setState({title: titles[i]})
    }, 3000)





    return (
      <div className="container">
        <Header title={this.state.title} />
      </div>
    );
  }
}
