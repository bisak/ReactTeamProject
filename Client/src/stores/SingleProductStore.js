import alt from '../alt'
import SingleProductActions from '../actions/SingleProductActions'
import moment from 'moment'

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
      reviews: []
    }
    this.review = ''
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

  }
}

export default alt.createStore(SingleProductStore)
