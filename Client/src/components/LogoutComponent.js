import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Auth from '../Auth'

class LogoutComponent extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
  }

  render () {
    return (<Redirect to={{ pathname: '/' }} />)
  }
}
export default LogoutComponent
