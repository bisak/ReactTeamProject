import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import moment from 'moment'

class Review extends Component {
  render () {
    let firstLine = (<Link to={`/profile/${this.props.creator}`}><h5 className='no-margin no-padding'>{this.props.creator}</h5></Link>)
    if (this.props.isReviewInProfile) {
      firstLine = (<Link to={`/product/${this.props.component._id}`}><h5 className='no-margin no-padding'>{this.props.component.name}</h5></Link>)
    }
    return (
      <Row className='text-center'>
        <Col className='thin-grey-border review' xs={10} xsOffset={1}>
          <div>{firstLine}</div>
          <div><span className='small-text'>{moment(this.props.createdAt).fromNow()}</span></div>
          <hr className='no-margin no-padding review-hr' />
          <div><p className='no-margin review-content'>{this.props.content}</p></div>
        </Col>
      </Row>

    )
  }
}
export default Review
