import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'
import AllProductsComponent from '../components/AllProductsComponent'
import ProfileComponent from '../components/ProfileComponent'
import AddProductComponent from '../components/AddProductComponent'
import SingleProductComponent from '../components/SingleProductComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import AddAdminComponent from '../components/AddAdminComponent'
import AllAdminsComponent from '../components/AllAdminsComponent'
import BanUserComponent from '../components/BanUserComponent'
import EditProductComponent from '../components/EditProductComponent'
import LogoutComponent from '../components/LogoutComponent'
import BoughtProductsComponent from '../components/BoughtProductsComponent'
import RemovedProductsComponent from '../components/RemovedProductsComponent'
import StatsComponent from '../components/StatsComponent'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route exact path='/login' component={LoginComponent} />
    <Route exact path='/logout' component={LogoutComponent} />
    <Route exact path='/register' component={RegisterComponent} />
    <Route exact path='/products' component={AllProductsComponent} />
    <Route exact path='/product/:id' component={SingleProductComponent} />
    <Route exact path='/profile/:username' component={ProfileComponent} />

    <PrivateRoute exact path='/products/bought' component={BoughtProductsComponent} />

    {/* Admin only routes */}
    <PrivateRoute admin exact path='/products/deleted' component={RemovedProductsComponent} />
    <PrivateRoute admin exact path='/admin/add-product' component={AddProductComponent} />
    <PrivateRoute admin exact path='/admin/edit-product/:id' component={EditProductComponent} />
    <PrivateRoute admin exact path='/admin/add-admin' component={AddAdminComponent} />
    <PrivateRoute admin exact path='/admin/all-admins' component={AllAdminsComponent} />
    <PrivateRoute admin exact path='/admin/ban-user' component={BanUserComponent} />
    <PrivateRoute admin exact path='/admin/stats' component={StatsComponent} />

    <Route exact path='/not-found' component={NotFoundComponent} />
    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
