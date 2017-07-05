import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductForm from './sub-components/ProductForm'
import EditProductActions from '../actions/EditProductActions'
import EditProductStores from '../stores/EditProductStore'

// Admin only
class EditProductComponent extends Component {
  constructor (props) {
    super(props)
    this.state = EditProductStores.getState()
    this.onChange = this.onChange.bind(this)
    this.productId = this.props.match.params.id
  }

  componentDidMount () {
    EditProductStores.listen(this.onChange)
    EditProductActions.getProductCurrentData(this.productId)
  }

  componentWillUnmount () {
    EditProductStores.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleEditProduct () {
    EditProductActions.editProduct(this.state.product, this.productId)
  }

  render () {
    return (
      <div className='container'>
        <Row><h4 className='text-center'>Edit Product</h4></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <ProductForm isEdit product={this.state.product} onEdit={this.handleEditProduct.bind(this)} onInput={EditProductActions.inputChange} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default EditProductComponent
