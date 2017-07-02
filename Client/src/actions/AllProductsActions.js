import alt from '../alt'
import axios from 'axios'
import config from '../config'

class AllProductsActions {
  constructor () {
    this.generateActions(
      'getProductsSuccess',
      'getProductsError',
      'changePageSuccess'
    )
  }

  getOnePageProducts (page) {
    return axios.get(`${config.baseUrl}/components?page=${page}`).then((response) => {
      this.getProductsSuccess(response.data, page)
      return true
    }).catch((response) => {
      this.getProductsError(response.data)
      return true
    })
  }
}

export default alt.createActions(AllProductsActions)
