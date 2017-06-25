import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeComponent from '../components/HomeComponent'
import NotFoundComponent from '../components/NotFoundComponent'
<<<<<<< HEAD
import ProductsComponent from '../components/ProductsComponent'
import AllUsersComponent from '../components/AllUsersComponent'
=======
import AllProductsComponent from '../components/AllProductsComponent'
>>>>>>> f95a4a813f843e340bb9e425beca0213e4919049
import ProfileComponnet from '../components/ProfileComponent'
import AddProductComponent from '../components/AddProductComponent'
import SingleProductComponent from '../components/SingleProductComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import AddAdminComponent from '../components/AddAdminComponent'
import AllAdminsComponent from '../components/AllAdminsComponent'
import BanUserComponent from '../components/BanUserComponent'
import EditProductComponent from '../components/EditProductComponent'
const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
<<<<<<< HEAD
    <Route exact path='/login' component={LoginComponent} />
    <Route exact path='/register' component={RegisterComponent} />
    <Route exact path='/products' component={ProductsComponent} />
    <Route exact path='/product/:id' component={SingleProductComponent} />
    <Route exact path='/admin/All' component={AllUsersComponent} />
    <Route exact path='/profile/:id' component={ProfileComponnet} />
    <Route exact path='/admin/addproduct' component={AddProductComponent} />
=======
    <Route path='/login' component={LoginComponent} />
    <Route path='/register' component={RegisterComponent} />
    <Route path='/products' component={AllProductsComponent} />
    <Route path='/product/:id' component={SingleProductComponent} />
    <Route path='/profile/:id' component={ProfileComponnet} />

    {/* Admin only routes */}
    <Route path='/admin/add-product' component={AddProductComponent} />
    <Route path='/admin/edit-product' component={EditProductComponent} />
    <Route path='/admin/add-admin' component={AddAdminComponent} />
    <Route path='/admin/all-admins' component={AllAdminsComponent} />
    <Route path='/admin/ban-user' component={BanUserComponent} />

>>>>>>> f95a4a813f843e340bb9e425beca0213e4919049
    <Route component={NotFoundComponent} />
  </Switch>
)

export default Routes
