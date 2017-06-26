import React, { Component } from 'react'
import { ControlLabel, FormControl, FormGroup, Button, Row, Col, Form } from 'react-bootstrap'

// Admin only
class AddProductComponent extends Component {
  render () {
    return (
      <div className='container'>
        <Row><h3 className='text-center'>Add Product</h3></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <Form horizontal>

              <FormGroup controlId='title-input'>
                <ControlLabel>Title</ControlLabel>
                <FormControl type='text' placeholder='Product title' />
              </FormGroup>

              <FormGroup controlId='description-input'>
                <ControlLabel>Description</ControlLabel>
                <FormControl componentClass='textarea' placeholder='Product description' />
              </FormGroup>

              <FormGroup controlId='demo-url-input'>
                <ControlLabel>Demo URL</ControlLabel>
                <FormControl type='url' placeholder='Demo URL' />
              </FormGroup>

              <FormGroup controlId='thumbnail-url-input'>
                <ControlLabel>Thumbnail URL</ControlLabel>
                <FormControl type='url' placeholder='Thumbnail URL' />
              </FormGroup>

              <FormGroup controlId='price-input'>
                <ControlLabel>Price</ControlLabel>
                <FormControl type='number' placeholder='Product Price' />
              </FormGroup>

              <FormGroup>
                <Button type='submit'>Add Product</Button>
              </FormGroup>

            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default AddProductComponent
