import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'
import ProductsView from '../components/ProductsView'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='/ProductsView' component={ProductsView} />

    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
