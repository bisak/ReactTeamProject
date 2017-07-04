import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class AllProductsActions {
  constructor () {
    this.generateActions(
      'getProductsSuccess',
      'getProductsError',
      'changePageSuccess',
      'inputChange'
    )
  }

  getOnePageProducts (page, search) {
    if (!search) search = ''
    return axios.get(`${config.baseUrl}/components?page=${page}&search=${search}`).then((response) => {
      this.getProductsSuccess(response.data, page)
      return true
    }).catch((error) => {
      console.log(error.response)
      this.getProductsError(error)
      return true
    })
  }

  getOnePageBoughtProducts (page) {
    return axios.get(`${config.baseUrl}/components/bought?page=${page}`, {headers: Auth.getAuthHeader()}).then((response) => {
      this.getProductsSuccess(response.data, page)
      return true
    }).catch((error) => {
      this.getProductsError(error)
      return true
    })
  }

  getOnePageRemovedProducts (page) {
    return axios.get(`${config.baseUrl}/components/deleted?page=${page}`, {headers: Auth.getAuthHeader()}).then((response) => {
      this.getProductsSuccess(response.data, page)
      return true
    }).catch((error) => {
      this.getProductsError(error)
      return true
    })
  }
}

export default alt.createActions(AllProductsActions)
