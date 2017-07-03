import React, { Component } from 'react'
import { FormControl, FormGroup, Button, Form } from 'react-bootstrap'

class ReviewForm extends Component {
  onFormSubmit (event) {
    event.preventDefault()
    this.props.onAdd()
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit.bind(this)} horizontal>

        <FormGroup controlId='review-input'>
          <FormControl required maxLength={500} componentClass='textarea' name='review' value={this.props.review} onChange={this.props.onInput} placeholder='Review this component.' />
        </FormGroup>

        <FormGroup>
          <Button className='center-block' type='submit'>Submit</Button>
        </FormGroup>

      </Form>

    )
  }
}
export default ReviewForm
