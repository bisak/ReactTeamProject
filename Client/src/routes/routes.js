import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import NotFoundPage from '../components/NotFoundPage'
import ProductsView from '../components/ProductsView'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='/ProductsView' component={ProductsView} />

    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
