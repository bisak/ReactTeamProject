const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true, dropDups: true },
  email: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true, dropDups: true },
  firstName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  lastName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  password: String,
  roles: {
    type: [String],
    default: ['normal'],
    enum: ['normal', 'admin']
  },
  profilePic: {
    type: String,
    default: 'http://i.imgur.com/upiaF0M.png'
  },
  banned: { type: Boolean, required: REQUIRED_VALIDATION_MESSAGE, default: false }
})

let User = mongoose.model('User', userSchema)

module.exports = User
module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length > 0) return

    encryption.generateHash('123456').then(hashedPass => {
      User.create({
        username: 'Admin',
        firstName: 'Admin',
        email: 'admin@gmail.com',
        lastName: 'Admin',
        password: hashedPass,
        roles: ['admin', 'normal']
      })
    })
  })
}
