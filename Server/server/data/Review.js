const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let reviewSchema = mongoose.Schema({
  component: { type: mongoose.Schema.Types.ObjectId, ref: 'Component', required: REQUIRED_VALIDATION_MESSAGE },
  content: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  creator: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE}
})

let Review = mongoose.model('Review', reviewSchema)

module.exports = Review
