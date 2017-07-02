import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from '../Auth'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    if (rest.admin) {
      return (
        Auth.isUserAuthenticated() && Auth.isUserAdmin() ? (<Component {...props} />) : (<Redirect to={{pathname: '/login', state: { from: props.location }}} />)
      )
    } else {
      return (
        Auth.isUserAuthenticated() ? (<Component {...props} />) : (<Redirect to={{pathname: '/login', state: { from: props.location }}} />)
      )
    }
  }
  } />
)

export default PrivateRoute
