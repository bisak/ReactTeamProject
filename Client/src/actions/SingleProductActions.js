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
      'handleModalOpen'
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
    return axios.post(`${config.baseUrl}/component/${id}/buy`, {}, {headers: Auth.getAuthHeader()}).then(response => {
      this.buySuccess(response)
      return true
    }).catch(error => {
      this.buyError(error)
      return true
    })
  }
}

export default alt.createActions(SingleProductActions)
