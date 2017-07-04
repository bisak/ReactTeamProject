import React, { Component } from 'react'
import { ControlLabel, FormControl, FormGroup, Button, Form } from 'react-bootstrap'

class ProductForm extends Component {
  onFormSubmit (event) {
    event.preventDefault()
    if (this.props.isEdit) {
      this.props.onEdit()
    } else {
      this.props.onAdd()
    }
  }

  render () {
    let fileInput = (<FormControl type='file' name='sourceCode' required onChange={this.props.onInput} />)

    if (this.props.isEdit) {
      fileInput = (<FormControl type='file' name='sourceCode' onChange={this.props.onInput} />)
    }

    return (
      <Form onSubmit={this.onFormSubmit.bind(this)} horizontal>

        <FormGroup controlId='title-input'>
          <ControlLabel>Name</ControlLabel>
          <FormControl maxLength={50} type='text' name='name' required value={this.props.product.name} onChange={this.props.onInput} placeholder='Product name' />
        </FormGroup>

        <FormGroup controlId='description-input'>
          <ControlLabel>Description</ControlLabel>
          <FormControl maxLength={400} componentClass='textarea' required name='description' value={this.props.product.description} onChange={this.props.onInput} placeholder='Product description' />
        </FormGroup>

        <FormGroup controlId='demo-url-input'>
          <ControlLabel>Demo URL</ControlLabel>
          <FormControl type='url' name='demoUrl' required value={this.props.product.demoUrl} onChange={this.props.onInput} placeholder='Demo URL' />
        </FormGroup>

        <FormGroup controlId='thumbnail-url-input'>
          <ControlLabel>Thumbnail URL</ControlLabel>
          <FormControl type='url' name='imageUrl' required value={this.props.product.imageUrl} onChange={this.props.onInput} placeholder='Thumbnail URL' />
        </FormGroup>

        <FormGroup controlId='price-input'>
          <ControlLabel>Price</ControlLabel>
          <FormControl type='number' name='price' required min={1} value={this.props.product.price} onChange={this.props.onInput} placeholder='Product Price' />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Source Code</ControlLabel>
          {fileInput}
        </FormGroup>

        <FormGroup>
          <Button className='center-block' type='submit'> {this.props.isEdit ? 'Edit' : 'Add'} Product</Button>
        </FormGroup>

      </Form>
    )
  }
}
export default ProductForm
