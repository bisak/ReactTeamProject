import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
<<<<<<< HEAD
import NotFoundPage from '../components/NotFoundPage'
import ProductsComponent from '../components/ProductsComponent'
import AdminAllComponent from '../components/AdminAllComponent'
import ProfileComponnet from '../components/ProfileComponent'
import AddProductComponent from '../components/AddProductComponent'
import SingleProductComponent from '../components/SingleProductComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'



=======
import NotFoundComponent from '../components/NotFoundComponent'
import ProductsView from '../components/ProductsView'
>>>>>>> 7b3ae60fea8504186d6b52f2a8666a26107d8bcc

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
<<<<<<< HEAD
    <Route exact path='/login' component={LoginComponent} />
    <Route exact path='/register' component={RegisterComponent} />
    <Route exact path='/products' component={ProductsComponent} />
    <Route exact path='/product/:id' component={SingleProductComponent} />
    <Route exact path='/admin/All' component={AdminAllComponent} />
    <Route exact path='/profile/:id' component={ProfileComponnet} />
    <Route exact path='/admin/addproduct' component={AddProductComponent} />
    <Route component={NotFoundPage} />
=======
    <Route exact path='/Products' component={ProductsView} />

    <Route component={NotFoundComponent} />
>>>>>>> 7b3ae60fea8504186d6b52f2a8666a26107d8bcc
  </Switch>
)

export default Routes
