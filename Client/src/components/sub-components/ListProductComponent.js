import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Auth from '../../Auth'

class ListProductComponent extends Component {
  onBuyBtnClick (event) {
    if (Auth.isUserAuthenticated()) {
      this.props.onBuy()
    }
  }

  handleDelete () {
    this.props.onDelete(this.props.product._id)
  }

  handleUnDelete () {
    this.props.onUnDelete(this.props.product._id)
  }

  render () {
    let deletePostBtn
    let unDeletePostBtn
    let editBtn

    if (Auth.isUserAdmin()) {
      if (this.props.product.isVisible) {
        deletePostBtn = (<Button onClick={this.handleDelete.bind(this)} className='action-button center-block' bsStyle='danger'>Delete</Button>)
      } else if (this.props.showUnDelete) {
        unDeletePostBtn = (<Button onClick={this.handleUnDelete.bind(this)} className='action-button center-block' bsStyle='success'>Show</Button>)
      }
      editBtn = (<Link to={`/admin/edit-product/${this.props.product._id}`}><Button className='action-button center-block' bsStyle='warning'>Edit</Button></Link>)
    }

    if (this.props.hideAllControls) {
      deletePostBtn = null
      unDeletePostBtn = null
    }

    return (
      <Row>
        <Col md={10} mdOffset={1} className='list-product-card z-depth-1'>
          <Col className='image-container' xs={12} sm={5}>
            <Link to={`/product/${this.props.product._id}`}>
              <Image className='list-image z-depth-1' alt='Product demo image' src={this.props.product.imageUrl} responsive rounded />
            </Link>
          </Col>
          <Col xs={12} sm={5} className='list-product-text'>
            <p className='title'><Link to={`/product/${this.props.product._id}`}><strong>{this.props.product.name}</strong></Link> (${this.props.product.price})</p>
            <p className='description'>{this.props.product.description}</p>
          </Col>
          <Col xs={12} sm={2} xsHidden>
            <div><Link to={`/product/${this.props.product._id}`}><Button className='action-button center-block'>Details</Button></Link></div>
            <div>{deletePostBtn}</div>
            <div>{unDeletePostBtn}</div>
            <div>{editBtn}</div>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default ListProductComponent
