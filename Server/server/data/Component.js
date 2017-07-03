const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let componentSchema = mongoose.Schema({
  name: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  sourcePath: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  description: { type: mongoose.Schema.Types.String },
  price: {
    type: mongoose.Schema.Types.Number,
    min: 0,
    max: Number.MAX_VALUE,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  imageUrl: { type: mongoose.Schema.Types.String },
  demoUrl: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: REQUIRED_VALIDATION_MESSAGE }],
  buyers: [{ type: mongoose.Schema.Types.String, ref: 'User', required: REQUIRED_VALIDATION_MESSAGE }],
  isVisible: { type: mongoose.Schema.Types.Boolean, required: REQUIRED_VALIDATION_MESSAGE, default: true }
}, { timestamps: true })

let Component = mongoose.model('Component', componentSchema)

module.exports = Component
