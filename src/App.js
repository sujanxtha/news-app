import NavBar from './components/navBar';
import './App.css';
import NewsComponent from './components/newsComponent.js';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <NewsComponent/>
      </>
      
    )
  }
}



