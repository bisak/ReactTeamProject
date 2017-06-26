const encryption = require('../utilities/encryption')
const User = require('../data/User')

module.exports = {
  register: (req, res) => {
    let reqUser = req.body

    let salt = encryption.generateSalt()
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)

    User.create({
      username: reqUser.username,
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      salt: salt,
      hashedPass: hashedPassword
    }).then(user => {
      req.logIn(user, (err, user) => {
        if (err) {
          res.locals.globalError = err
          res.send(user)
        }
        res.sendStatus(200)
      })
    })
  },
  login: (req, res) => {
    let reqUser = req.body
    User
      .findOne({ username: reqUser.username }).then(user => {
        if (!user) {
          res.locals.globalError = 'Invalid user data'
          res.sendStatus(500)
        }

        if (!user.authenticate(reqUser.password)) {
          res.locals.globalError = 'Invalid user data'
          res.sendStatus(500)
          return
        }

        req.logIn(user, (err, user) => {
          if (err) {
            res.locals.globalError = err
            res.sendStatus(500)
          }
          res.sendStatus(200)
        })
      })
  },
  logout: (req, res) => {
    req.logout()
    res.sendStatus(200)
  }
}
