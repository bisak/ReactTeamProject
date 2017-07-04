import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductForm from './sub-components/ProductForm'
import AddProductActions from '../actions/AddProductActions'
import AddProductStore from '../stores/AddProductStore'

// Admin only
class AddProductComponent extends Component {
  constructor (props) {
    super(props)
    this.state = AddProductStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    AddProductStore.listen(this.onChange)
  }

  componentWillUnmount () {
    AddProductStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleAddProduct () {
    AddProductActions.addProduct(this.state.product)
  }

  render () {
    return (
      <div className='container remove-navbar-margin'>
        <Row><h3 className='text-center'>Add Product</h3></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <ProductForm product={this.state.product} onAdd={this.handleAddProduct.bind(this)} onInput={AddProductActions.inputChange} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default AddProductComponent
