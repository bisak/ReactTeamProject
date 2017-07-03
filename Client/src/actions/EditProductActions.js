import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'

class EditProductsActions {
  constructor () {
    this.generateActions(
      'getProductCurrentDataSuccess',
      'getProductCurrentDataError',
      'editProductSuccess',
      'editProductError',
      'inputChange'
    )
  }
  getProductCurrentData (id) {
    return axios.get(`${config.baseUrl}/component/${id}`, { headers: Auth.getAuthHeader() }).then(response => {
      this.getProductCurrentDataSuccess(response.data)
      return true
    }).catch(error => {
      this.getProductCurrentDataError(error)
      return true
    })
  }

  editProduct (editedProductData, id) {
    let formData = new global.FormData()
    const editedProductCopy = {...editedProductData}
    const {sourceCode} = editedProductCopy
    delete editedProductCopy.sourceCode
    formData.append('data', JSON.stringify(editedProductCopy))
    formData.append('sourceCode', sourceCode)
    return axios.put(`${config.baseUrl}/component/${id}/edit`, formData, {headers: Auth.getAuthHeader()}).then((response) => {
      this.editProductSuccess(response.data)
      return true
    }).catch((error) => {
      this.editProductError(error)
      return true
    })
  }
}

export default alt.createActions(EditProductsActions)
