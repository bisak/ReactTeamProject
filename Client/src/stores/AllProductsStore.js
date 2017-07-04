import alt from '../alt'
import AllProductsActions from '../actions/AllProductsActions'
import SingleProductActions from '../actions/SingleProductActions'
import toastr from 'toastr'

class AllProductsStore {
  constructor () {
    this.bindActions(AllProductsActions)
    this.bindListeners({
      onDeleteSuccess: SingleProductActions.deleteSuccess,
      onDeleteError: SingleProductActions.deleteError,
      onUnDeleteSuccess: SingleProductActions.unDeleteSuccess,
      onUnDeleteError: SingleProductActions.unDeleteError
    })

    this.products = []
    this.pagesCount = 0
    this.activePage = 1
    this.search = ''
    this.noProductsAvailable = false
  }

  onGetProductsSuccess (resp) {
    let ajaxData = resp[0]
    let requestPage = resp[1]
    this.products = ajaxData.data.products
    if (this.products.length === 0) {
      this.noProductsAvailable = true
    } else {
      this.noProductsAvailable = false
    }
    this.pagesCount = ajaxData.data.pagesCount
    this.activePage = requestPage
    window.scrollTo(0, 0)
  }

  onGetProductsError (error) {
    console.log(error)
    toastr.error('An error occured when getting posts.')
  }

  onDeleteSuccess (response) {
    this.products = this.products.filter(product => product._id !== response.data._id)
  }

  onDeleteError (error) {
    console.log(error.response)
  }

  onUnDeleteSuccess (response) {
    this.products = this.products.filter(product => product._id !== response.data._id)
  }

  onUnDeleteError (error) {
    console.log(error.response)
  }

  onInputChange (event) {
    const target = event.target
    this.search = target.value
  }
}

export default alt.createStore(AllProductsStore)
