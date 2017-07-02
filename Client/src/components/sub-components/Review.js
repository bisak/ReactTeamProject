import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import moment from 'moment'

class ProductForm extends Component {
  render () {
    return (
      <Row className='text-center'>
        <Col className='thin-grey-border review' xs={10} xsOffset={1}>
          <div><Link to={`/profile/${this.props.creator}`}><h5 className='no-margin no-padding'>{this.props.creator}</h5></Link></div>
          <div><span className='small-text'>{moment(this.props.createdAt).fromNow()}</span></div>
          <hr className='no-margin no-padding review-hr'/>
          <div><p className='no-margin review-content'>{this.props.content}</p></div>
        </Col>
      </Row>

    )
  }
}
export default ProductForm
