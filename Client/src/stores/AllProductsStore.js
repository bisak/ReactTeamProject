import alt from '../alt'
import AllProductsActions from '../actions/AllProductsActions'
import toastr from 'toastr'
import history from '../history'

class AllProductsStore {
  constructor () {
    this.bindActions(AllProductsActions)
    this.products = []
    this.pagesCount = 0
    this.activePage = 1
  }

  onGetProductsSuccess (resp) {
    let ajaxData = resp[0]
    let requestPage = resp[1]
    this.products = ajaxData.data.products
    this.pagesCount = ajaxData.data.pagesCount
    this.activePage = requestPage
    if (this.activePage === 1) {
      history.push(`/products`)
    } else {
      history.push(`?page=${this.activePage}`)
    }
  }

  onGetProductsError (data) {
    console.log(data)
    toastr.error('An error occured when getting posts.')
  }
}

export default alt.createStore(AllProductsStore)
