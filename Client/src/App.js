import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import Routes from './routes/routes'

class App extends Component {
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
