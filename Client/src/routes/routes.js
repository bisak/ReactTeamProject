import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import NotFoundPage from '../components/NotFoundPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />

    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
