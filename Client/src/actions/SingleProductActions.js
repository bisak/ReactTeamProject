import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class SingleProductActions {
  constructor () {
    this.generateActions(
      'getSingleProductSuccess',
      'getSingleProductError',
      'addReviewSuccess',
      'addReviewError',
      'inputChange',
      'buySuccess',
      'buyError',
      'handleModalClose',
      'handleModalOpen',
      'deleteSuccess',
      'deleteError',
      'unDeleteSuccess',
      'unDeleteError'
    )
  }

  getSingleProduct (id) {
    return axios.get(`${config.baseUrl}/component/${id}`, {headers: Auth.getAuthHeader()}).then(response => {
      this.getSingleProductSuccess(response.data)
      return true
    }).catch(error => {
      this.getSingleProductError(error)
      return true
    })
  }

  addReview (reviewToAdd, id) {
    return axios.post(`${config.baseUrl}/component/${id}/review`, {content: reviewToAdd}, {headers: Auth.getAuthHeader()}).then(response => {
      this.addReviewSuccess(response.data)
      return true
    }).catch(error => {
      this.addReviewError(error)
      return true
    })
  }

  buyProduct (id) {
    return axios.post(`${config.baseUrl}/component/${id}/buy`, {}, { headers: Auth.getAuthHeader() }).then(response => {
      this.buySuccess(response.data)
      return true
    }).catch(error => {
      this.buyError(error)
      return true
    })
  }

  downloadSource (id) {
    const response = {
      file: `${config.baseUrl}/component/${id}/source`
    }
    window.open(response.file)
    return true
  }

  deleteProduct (id) {
    return axios.post(`${config.baseUrl}/component/${id}/delete`, {}, {headers: Auth.getAuthHeader()}).then(response => {
      this.deleteSuccess(response.data)
      return true
    }).catch(error => {
      this.deleteError(error)
      return true
    })
  }

  unDeleteProduct (id) {
    return axios.post(`${config.baseUrl}/component/${id}/un-delete`, {}, {headers: Auth.getAuthHeader()}).then(response => {
      this.unDeleteSuccess(response.data)
      console.log('here')
      return true
    }).catch(error => {
      console.log('here2')
      this.unDeleteError(error)
      return true
    })
  }
}

export default alt.createActions(SingleProductActions)
