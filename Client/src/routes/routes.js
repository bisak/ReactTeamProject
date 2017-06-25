import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import NotFoundPage from '../components/NotFoundPage'
import ProductsComponent from '../components/ProductsComponent'
import AdminAllComponent from '../components/AdminAllComponent'
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
    <Route exact path='/admin/All' component={AdminAllComponent} />
    <Route exact path='/profile/:id' component={ProfileComponnet} />
    <Route exact path='/admin/addproduct' component={AddProductComponent} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
