import alt from '../alt'
import EditProductActions from '../actions/EditProductActions'
import toastr from 'toastr'
import history from '../history'

class EditProductStore {
  constructor () {
    this.bindActions(EditProductActions)
    this.product = {
      name: '',
      description: '',
      demoUrl: '',
      imageUrl: '',
      price: '',
      sourceCode: null
    }
  }

  onEditProductSuccess (response) {
    alt.recycle(this)
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Successfully edited product.')
    history.push(`/product/${response.data._id}`)
  }

  onEditProductError (response) {
    console.log(response)
  }
  onGetProductCurrentDataSuccess (data) {
    let productData = data.data
    this.product.name = productData.name
    this.product.description = productData.description
    this.product.demoUrl = productData.demoUrl
    this.product.price = productData.price
    this.product.imageUrl = productData.imageUrl
  }

  onGetProductCurrentDataError (error) {
    if (error.response.status === 404) {
      history.replace('/not-found')
    }
    console.log(error.response)
  }

  onInputChange (event) {
    const target = event.target
    const fieldName = target.name
    let value = target.value
    if (fieldName === 'sourceCode') {
      value = event.target.files[0]
    }
    this.product[fieldName] = value
  }
}

export default alt.createStore(EditProductStore)
