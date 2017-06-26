import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Row, Col, Image } from 'react-bootstrap'

class ListProductComponent extends Component {
  render () {
    return (
      <Row>
        <Col md={10} mdOffset={1} className='list-product-card'>
          <Col xs={12} sm={3}>
            <a href='https://image.prntscr.com/image/kz_9-9MJSIS01iKqPSY81g.png' rel='noopener noreferrer' target='_blank'>
              <Image className='thin-grey-border' alt='Product demo image' src='https://image.prntscr.com/image/kz_9-9MJSIS01iKqPSY81g.png' responsive rounded />
            </a>
          </Col>
          <Col xs={12} sm={6}>
            <p className='title'><Link to={'/product/someproduct'}>Google maps component for react</Link></p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio repellendus cum iste, impedit eum laborum consectetur omnis, necessitatibus unde quas doloribus illo, aliquam aspernatur labore vero deleniti veritatis reprehenderit animi.</p>
          </Col>
          <Col xs={12} sm={3}>
            <Button className='action-button float-right' bsStyle='success'>Buy for 15$</Button>
          </Col>
        </Col>
      </Row>
    )
  }
}
export default ListProductComponent
