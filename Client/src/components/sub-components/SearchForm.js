import React, { Component } from 'react'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'

class SearchForm extends Component {
  handleSubmit (event) {
    event.preventDefault()
    this.props.onSearch()
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} inline>
        <FormGroup controlId='formInlineSearch'>
          <FormControl type='text' name='search' value={this.props.search} onChange={this.props.onInput} placeholder='Component name...' />
        </FormGroup>
        {' '}
        <Button type='submit'>Search</Button>

      </Form>
    )
  }
}
export default SearchForm
