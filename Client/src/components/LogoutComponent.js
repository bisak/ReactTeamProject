import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Auth from '../Auth'

class BanUserComponent extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
  }

  render () {
    return (<Redirect to={{ pathname: '/' }} />)
  }
}
export default BanUserComponent
