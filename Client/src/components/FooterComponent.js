import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class FooterComponent extends Component {
  render () {
    return (
      <footer className='footer thin-grey-border'>
        <div className='container'>
          <Grid>
            <Row className='show-grid'>
              <Col md={6} xs={6}>
                <h4 className='footer-text'><a href='https://github.com/biskazz/ReactTeamProject' rel='noopener noreferrer' target='_blank'>Reactive Store - a shop for React components</a></h4>
              </Col>
              <Col md={6} className='float-right'>
                <h5 className='footer-text-small' style={{display: 'block'}}>Built by</h5>
                <h5><a href='https://github.com/biskazz' rel='noopener noreferrer' target='_blank'>biskazz</a> and <a href='https://github.com/nellymin' rel='noopener noreferrer' target='_blank'>nellymin</a></h5>
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    )
  }
}

export default FooterComponent
