import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import Auth from '../../Auth'

class ListProductComponent extends Component {
  onBuyBtnClick (event) {
    if (Auth.isUserAuthenticated()) {
      this.props.onBuy()
    }
  }

  render () {
    return (
      <Row>
        <Col md={10} mdOffset={1} className='list-product-card'>
          <Col className='image-container' xs={12} sm={5}>
            <Link to={`/product/${this.props.product._id}`}>
              <Image className='list-image' alt='Product demo image' src={this.props.product.imageUrl} responsive rounded />
            </Link>
          </Col>
          <Col xs={12} sm={5} className='list-product-text'>
            <p className='title'><Link to={`/product/${this.props.product._id}`}>{this.props.product.name}</Link></p>
            <p className='description'>{this.props.product.description}</p>
          </Col>
          <Col xs={12} sm={2} xsHidden>
            <Link className='btn btn-default action-button float-right' to={`/product/${this.props.product._id}`} role='button'>Details</Link>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default ListProductComponent
