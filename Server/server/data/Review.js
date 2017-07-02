const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let reviewSchema = mongoose.Schema({
  component: { type: mongoose.Schema.Types.ObjectId, ref: 'Component', required: REQUIRED_VALIDATION_MESSAGE },
  content: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, maxlength: 500 },
  creator: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE}
}, {timestamps: true})

let Review = mongoose.model('Review', reviewSchema)

module.exports = Review
