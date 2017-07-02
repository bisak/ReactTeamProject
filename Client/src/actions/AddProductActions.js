import alt from '../alt'
import axios from 'axios'
import config from '../config'
import Auth from '../Auth'
class AddProductsActions {
  constructor () {
    this.generateActions(
      'addProductSuccess',
      'addProductError',
      'inputChange'
    )
  }

  addProduct (productToAdd) {
    let formData = new global.FormData()
    const productToAddCopy = {...productToAdd}
    const {sourceCode} = productToAddCopy
    delete productToAddCopy.sourceCode
    formData.append('data', JSON.stringify(productToAddCopy))
    formData.append('sourceCode', sourceCode)
    return axios.post(`${config.baseUrl}/component/add`, formData, {headers: {Authorization: Auth.getToken()}}).then((success) => {
      this.addProductSuccess(success)
      return true
    }).catch((error) => {
      this.addProductError(error)
      return true
    })
  }
}

export default alt.createActions(AddProductsActions)
