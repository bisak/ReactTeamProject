const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const morgan = require('morgan')

module.exports = (app) => {
  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(morgan('common'))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user
    }

    next()
  })

  app.use(express.static('public'))

  console.log('Express ready!')
}
