import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Row, Col, Image } from 'react-bootstrap'

class ListProductComponent extends Component {
  render () {
    return (
      <Row>
        <Col md={10} mdOffset={1} className='list-product-card'>
          <Col xs={12} sm={3}>
            <a href={this.props.product.imageUrl} rel='noopener noreferrer' target='_blank'>
              <Image alt='Product demo image' src={this.props.product.imageUrl} responsive thumbnail />
            </a>
          </Col>
          <Col xs={12} sm={6}>
            <p className='title'><Link to={`/product/${this.props.product._id}`}>{this.props.product.name}</Link></p>
            <p className='description'>{this.props.product.description}</p>
          </Col>
          <Col xs={12} sm={3}>
            <Button className='action-button float-right' bsStyle='success'>Buy for {this.props.product.price}$</Button>
          </Col>
        </Col>
      </Row>
    )
  }
}
export default ListProductComponent
