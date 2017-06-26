const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let componentSchema = mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  description: { type: mongoose.Schema.Types.String },
  price: {
    type: mongoose.Schema.Types.Number,
    min: 0,
    max: Number.MAX_VALUE,
    default: 0,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  image: { type: mongoose.Schema.Types.String },
  demo: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: REQUIRED_VALIDATION_MESSAGE }]
  //category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: REQUIRED_VALIDATION_MESSAGE}
})

let Component = mongoose.model('Component', componentSchema)

module.exports = Component
