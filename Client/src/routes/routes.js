import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'
import AllProductsComponent from '../components/AllProductsComponent'
import ProfileComponnet from '../components/ProfileComponent'
import AddProductComponent from '../components/AddProductComponent'
import SingleProductComponent from '../components/SingleProductComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import AddAdminComponent from '../components/AddAdminComponent'
import AllAdminsComponent from '../components/AllAdminsComponent'
import BanUserComponent from '../components/BanUserComponent'
import EditProductComponent from '../components/EditProductComponent'
import LogoutComponent from '../components/LogoutComponent'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route path='/login' component={LoginComponent} />
    <Route path='/logout' component={LogoutComponent} />
    <Route path='/register' component={RegisterComponent} />
    <Route path='/products' component={AllProductsComponent} />
    <Route path='/product/:id' component={SingleProductComponent} />
    <Route path='/profile/:username' component={ProfileComponnet} />

    {/* Admin only routes */}
    <Route path='/admin/add-product' component={AddProductComponent} />
    <Route path='/admin/edit-product' component={EditProductComponent} />
    <Route path='/admin/add-admin' component={AddAdminComponent} />
    <Route path='/admin/all-admins' component={AllAdminsComponent} />
    <Route path='/admin/ban-user' component={BanUserComponent} />

    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
