import React, { Component } from 'react'
import {Row, Col, Image, Button} from 'react-bootstrap'
import SingleProductActions from '../actions/SingleProductActions'
import SingleProductStore from '../stores/SingleProductStore'
import alt from '../alt'
import ReviewForm from './sub-components/ReviewForm'
import Review from './sub-components/Review'
import ConfirmPurchaseModal from './sub-components/ConfirmPurchaseModal'

class SingleProductComponent extends Component {
  constructor (props) {
    super(props)
    this.state = SingleProductStore.getState()
    this.onChange = this.onChange.bind(this)
    this.productId = this.props.match.params.id
  }

  componentDidMount () {
    SingleProductStore.listen(this.onChange)
    SingleProductActions.getSingleProduct(this.productId)
  }

  componentWillUnmount () {
    SingleProductStore.unlisten(this.onChange)
    alt.recycle(SingleProductStore)
  }

  onChange (state) {
    this.setState(state)
  }

  handleAddReview () {
    SingleProductActions.addReview(this.state.review, this.state.product._id)
  }

  handleBuy () {
    SingleProductActions.buyProduct(this.state.product._id)
  }

  render () {
    let reviews = this.state.product.reviews.map(review => {
      return (
        <Review key={review._id} {...review} />
      )
    })

    let noReviewsMessage

    if (!reviews.length) {
      noReviewsMessage = <h5 className='text-center'>No reviews for this component. Add the first one.</h5>
    }

    let actionButton = (<Button className='action-button center-block' onClick={SingleProductActions.handleModalOpen} bsStyle='success'>Buy for ${this.state.product.price}</Button>)
    if (this.state.product.bought) {
      actionButton = (<Button className='action-button center-block' bsStyle='success'>Download Source</Button>)
    }
    return (
      <div className='container'>
        <Row><h4 className='text-center'>{this.state.product.name}</h4></Row>
        <Row>{actionButton}</Row>
        <Row className='text-center'><p className='for-sale-since'>For sale since {this.state.product.postedAgo}.</p></Row>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <a href={this.state.product.imageUrl} rel='noopener noreferrer' target='_blank'>
              <Image className='center-block' alt='Component demo image' src={this.state.product.imageUrl} responsive rounded thumbnail />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <div className='text-center break-word'>
              <br />
              <p className='profile-fnln'>{this.state.product.description}</p>
              <a className='btn btn-default btn-sm' role='button' href={this.state.product.demoUrl} rel='noopener noreferrer' target='_blank'>
                Component Demo
              </a>
            </div>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <ReviewForm review={this.state.review} onInput={SingleProductActions.inputChange} onAdd={this.handleAddReview.bind(this)} />
          </Col>
        </Row>

        <Row className='bottom-profile-section'>
          <Col className='thin-grey-border' xs={12} sm={10} smOffset={1}>
            <h4 className='text-center'>Reviews</h4>
            <hr />
            {reviews}
            {noReviewsMessage}
          </Col>
        </Row>

        <ConfirmPurchaseModal buy={this.handleBuy.bind(this)} product={this.state.product} showModal={this.state.showModal} close={SingleProductActions.handleModalClose} />
      </div>
    )
  }
}
export default SingleProductComponent
