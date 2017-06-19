import React, { Component } from 'react';
import './styles/App.css';

import Header from '../components/Header'
import Footer from '../components/Footer'

const titles = [
   "JavaScript Developer", "Full Stack Developer", "Galvanize Grad", "Car Nerd", "Agile Worker", "React Developer",
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
      const i = Math.floor(Math.random() * 6)
      this.setState({title: titles[i]})
    }, 6000)





    return (
      <div className="container head">
        <Header title={this.state.title} />
      </div>
    );
  }
}
