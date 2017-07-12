import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import alt from '../alt'
import ProfileActions from '../actions/ProfileActions'
import ProfileStore from '../stores/ProfileStore'
import Review from './sub-components/Review'

class ProfileComponent extends Component {
  constructor (props) {
    super(props)
    this.state = ProfileStore.getState()
    this.onChange = this.onChange.bind(this)
    this.profileUsername = this.props.match.params.username
  }

  componentDidMount () {
    ProfileStore.listen(this.onChange)
    ProfileActions.getProfile(this.profileUsername)
  }

  componentWillUnmount () {
    ProfileStore.unlisten(this.onChange)
    alt.recycle(ProfileStore)
  }

  onChange (state) {
    this.setState(state)
  }

  render () {
    let reviews = this.state.reviews.map(review => {
      review.isReviewInProfile = true
      return (
        <Review key={review._id} {...review} />
      )
    })

    let noReviewsMessage
    if (!reviews.length) {
      noReviewsMessage = <h5 className='text-center'>No reviews by this user</h5>
    }
    return (
      <div className='container'>
        <Row>
          <Col xs={4} xsOffset={4} md={2} mdOffset={5}>
            <Image className='z-depth-1' alt='User Avatar' src={this.state.user.profilePic} responsive circle />
          </Col>
        </Row>
        <Row>
          <p className='profile-username'>{this.state.user.username}</p>
          <p className='profile-fnln'>{this.state.user.firstName} {this.state.user.lastName}</p>
        </Row>
        <hr className='no-margin no-padding' />
        <Row className='bottom-profile-section'>
          <Col className='z-depth-1' xs={10} xsOffset={1}>
            <h4 className='text-center'>Reviews from {this.state.user.username}</h4>
            <hr />
            {reviews}
            {noReviewsMessage}
          </Col>
        </Row>
      </div>
    )
  }
}
export default ProfileComponent
