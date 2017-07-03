const encryptionUtil = require('../utilities/encryption')
const validatorUtil = require('../utilities/validation')
const User = require('../data/User')
const Review = require('../data/Review')
const jwt = require('jsonwebtoken')

module.exports = {
  register (req, res) {
    let userToRegister = req.body
    if (userToRegister && userToRegister.roles) delete userToRegister.roles
    let validateInput = validatorUtil.validateRegisterInput(userToRegister)
    if (!validateInput.isValid) {
      return res.status(400).json({
        success: false,
        msg: validateInput.msg
      })
    }

    return encryptionUtil.generateHash(userToRegister.password).then((hash) => {
      userToRegister.password = hash
      return User.create(userToRegister).then((registeredUser) => {
        return res.json({
          success: true
        })
      })
    }).catch((error) => {
      console.error(error)
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          msg: `This user already exists.`
        })
      }
      return res.status(500).json({
        success: false,
        msg: `Unexpected error.`
      })
    })
  },
  login (req, res) {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ username: username }).then((foundUser) => {
      if (!foundUser) {
        return res.status(400).json({ success: false, msg: 'User not found' })
      }
      return encryptionUtil.comparePassword(password, foundUser.password).then((isMatch) => {
        if (isMatch) {
          foundUser.password = undefined
          const token = jwt.sign(foundUser, 'jwt-secret-key')
          return res.json({
            success: true,
            token: 'JWT ' + token
          })
        }
        return res.status(400).json({ success: false, msg: 'Wrong password' })
      })
    }).catch((error) => {
      console.error(error)
      return res.status(500).json({ success: false, msg: 'Database error.', err: error })
    })
  },
  getUserById (req, res) {
    let username = req.params.username
    let promises = []
    promises.push(User.findOne({ username: username }).select('-password').lean())
    promises.push(Review.find({ creator: username }).select('-creator').sort('-createdAt').populate('component').lean())

    Promise.all(promises).then((resolutions) => {
      let data = {}
      data.user = resolutions[0]
      if (!data.user) {
        return res.status(404).json({ success: false, msg: 'User was not found' })
      }
      data.reviews = resolutions[1]
      return res.status(200).json({ success: true, data: data })
    })
  }
}
