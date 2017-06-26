import React, { Component } from 'react'
import {Row, Col, Image, Form, FormControl, FormGroup, Button} from 'react-bootstrap'

class SingleProductComponent extends Component {
  render () {
    return (
      <div className='container'>
        <Row><h4 className='text-center'>Details for Google maps component</h4></Row>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <Image alt='Component demo image' src='https://image.prntscr.com/image/kz_9-9MJSIS01iKqPSY81g.png' responsive rounded />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={10} smOffset={1}>
            <div className='text-center'>
              <span>Description</span>
              <p className='profile-fnln'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sunt modi quaerat esse architecto rem natus aliquam, in nobis deleniti recusandae libero rerum ullam accusantium, non nemo autem soluta! Porro.</p>
              <a href='http://react-gmaps.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                <p className='profile-fnln'>Component Demo</p>
              </a>
            </div>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <Form horizontal>

              <FormGroup controlId='description-input'>
                <FormControl componentClass='textarea' placeholder='Your review.' />
              </FormGroup>

              <FormGroup>
                <Button className='center-block' type='submit'>Submit</Button>
              </FormGroup>

            </Form>
          </Col>
        </Row>

        <Row className='bottom-profile-section'>
          <Col className='thin-grey-border' md={12}>
            <h4 className='text-center'>Reviews</h4>
            <hr />
            all reviews go here
          </Col>
        </Row>
      </div>
    )
  }
}
export default SingleProductComponent
