import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import Routes from './routes/routes'
import axios from 'axios'

class App extends Component {
  componentWillMount () {
    axios.get('http://ip.jsontest.com/').then(console.log)
  }

  render () {
    return (
      <div className='App'>
        <NavbarComponent />
        <Routes />
        <FooterComponent />
      </div>
    )
  }
}

export default App
