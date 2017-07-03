import alt from '../alt'
import SingleProductActions from '../actions/SingleProductActions'
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
      bought: false
    }
    this.review = ''
    this.showModal = false
  }

  onGetSingleProductSuccess (data) {
    let productData = data.data
    this.product.postedAgo = moment(productData.createdAt).fromNow()
    this.product.name = productData.name
    this.product.description = productData.description
    this.product.demoUrl = productData.demoUrl
    this.product.price = productData.price
    this.product.imageUrl = productData.imageUrl
    this.product._id = productData._id
    this.product.reviews = productData.reviews
    this.product.bought = productData.bought
  }

  onGetSingleProductError (data) {
    console.log(data)
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

  onBuyError (response) {
    console.log(response.response)
  }

  onHandleModalClose () {
    this.showModal = false
  }

  onHandleModalOpen () {
    this.showModal = true
  }
}

export default alt.createStore(SingleProductStore)
