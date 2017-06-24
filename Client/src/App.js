import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import HomeComponent from './components/HomeComponent'
import axios from 'axios'

class App extends Component {
  componentWillMount () {
    axios.get('http://ip.jsontest.com/').then(console.log)
  }

  render () {
    return (
      <div className='App'>
        <NavbarComponent />
        <div className='container'>
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
          <HomeComponent />
        </div>
        <FooterComponent />
      </div>
    )
  }
}

export default App
