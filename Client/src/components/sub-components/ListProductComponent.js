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
    if (Auth.isUserAdmin()) {
      if (this.props.product.isVisible) {
        deletePostBtn = (<Button onClick={this.handleDelete.bind(this)} className='action-button center-block' bsStyle='danger'>Delete</Button>)
      } else if (this.props.showUnDelete) {
        unDeletePostBtn = (<Button onClick={this.handleUnDelete.bind(this)} className='action-button center-block' bsStyle='success'>Show</Button>)
      }
    }

    if(this.props.hideAllControls){
      deletePostBtn = null
      unDeletePostBtn = null
    }

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
            <div><Button className='action-button center-block'><Link to={`/product/${this.props.product._id}`} role='button'>Details</Link></Button></div>
            <div>{deletePostBtn}</div>
            <div>{unDeletePostBtn}</div>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default ListProductComponent
