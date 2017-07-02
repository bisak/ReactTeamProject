import alt from '../alt'
import AddProductsActions from '../actions/AddProductActions'
import toastr from 'toastr'

class AddProductsStore {
  constructor () {
    this.bindActions(AddProductsActions)
    this.product = {
      name: '',
      description: '',
      demoUrl: '',
      imageUrl: '',
      price: '',
      sourceCode: null
    }
  }

  onAddProductSuccess (response) {
    alt.recycle(this)
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Successfully added product.')
  }

  onAddProductError (response) {

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

export default alt.createStore(AddProductsStore)
