import React, { Component } from 'react'
import ListProductComponent from './sub-components/ListProductComponent'

class AllProductsComponent extends Component {
  render () {
    return (
      <div>
        <ListProductComponent />
        <ListProductComponent />
        <ListProductComponent />
        <ListProductComponent />
        <ListProductComponent />
        <ListProductComponent />
      </div>
    )
  }
}
export default AllProductsComponent
