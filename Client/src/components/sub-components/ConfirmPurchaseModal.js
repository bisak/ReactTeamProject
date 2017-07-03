import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class ConfirmPurchaseModal extends Component {
  render () {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton className='delete-modal-header'>
            <Modal.Title>Confirm Purchase</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.product.name} <strong>(${this.props.product.price})</strong></h4>
            <p>{this.props.product.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle={'success'} onClick={this.props.buy}>Buy now!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ConfirmPurchaseModal
