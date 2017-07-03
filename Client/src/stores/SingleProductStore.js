import alt from '../alt'
import SingleProductActions from '../actions/SingleProductActions'
import history from '../history'
import moment from 'moment'
import toastr from 'toastr'

class SingleProductStore {
  constructor () {
    this.bindActions(SingleProductActions)
    this.product = {
      name: '',
      description: '',
      demoUrl: '',
      imageUrl: '',
      price: '',
      postedAgo: '',
      _id: '',
      reviews: [],
      bought: false,
      isVisible: true
    }
    this.review = ''
    this.showModal = false
  }

  onGetSingleProductSuccess (response) {
    let productData = response.data
    this.product = {...productData}
    this.product.postedAgo = moment(productData.createdAt).fromNow()
  }

  onGetSingleProductError (error) {
    if (error.response.status === 404) {
      history.replace('/not-found')
    }
    console.log(error.response)
  }

  onInputChange (event) {
    const {target} = event
    const fieldName = target.name
    let value = target.value
    this[fieldName] = value
  }

  onAddReviewSuccess (data) {
    this.product.reviews.unshift(data.data)
    this.review = ''
    console.log(this.product)
  }

  onAddReviewError (data) {
    if (data.response.status === 401) {
      toastr.options.positionClass = 'toast-bottom-right'
      toastr.warning('Log in to post a review.')
    }
  }

  onBuySuccess (response) {
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('You can download the source code now.', 'Product bought successfully')
    this.showModal = false
    this.product.bought = true
  }

  onBuyError (error) {
    console.log(error.response)
  }

  onHandleModalClose () {
    this.showModal = false
  }

  onHandleModalOpen () {
    this.showModal = true
  }

  onDeleteSuccess (response) {
    this.product.isVisible = false
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Sucessfully deleted product.')
    console.log(response)
  }

  onDeleteError (error) {
    console.log(error.response)
  }

  onUnDeleteSuccess (response) {
    this.product.isVisible = true
    toastr.options.positionClass = 'toast-bottom-right'
    toastr.success('Sucessfully Undeleted product.')
    console.log(response)
  }

  onUnDeleteError (error) {
    console.log(error.response)
  }
}

export default alt.createStore(SingleProductStore)
