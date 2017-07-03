import React, { Component } from 'react'
import {Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap'

class SearchForm extends Component {
  render () {
    return (
      <Form inline>

        <FormGroup controlId="formInlineEmail">
          <FormControl type="text" name='search' placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Find
        </Button>
        
      </Form>
    )
  }
}
export default SearchForm
