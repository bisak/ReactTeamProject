import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'
import ProductsComponent from '../components/ProductsComponent'
import AllUsersComponent from '../components/AllUsersComponent'
import ProfileComponnet from '../components/ProfileComponent'
import AddProductComponent from '../components/AddProductComponent'
import SingleProductComponent from '../components/SingleProductComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='/login' component={LoginComponent} />
    <Route exact path='/register' component={RegisterComponent} />
    <Route exact path='/products' component={ProductsComponent} />
    <Route exact path='/product/:id' component={SingleProductComponent} />
    <Route exact path='/admin/All' component={AllUsersComponent} />
    <Route exact path='/profile/:id' component={ProfileComponnet} />
    <Route exact path='/admin/addproduct' component={AddProductComponent} />
    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
