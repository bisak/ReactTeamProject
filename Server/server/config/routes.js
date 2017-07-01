const controllers = require('../controllers')
const auth = require('./auth')()
const router = require('express').Router()

module.exports = (app) => {
  router.post('/users/register', controllers.users.register)
  router.post('/users/login', controllers.users.login)

  router.post('/component/add', auth.isAuthenticated('Admin'), controllers.components.addComponent)
  router.put('/component/edit', auth.isAuthenticated('Admin'), controllers.components.editComponent)
  router.post('/component/delete', auth.isAuthenticated('Admin'), controllers.components.deleteComponent)
  router.get('/component/:id', controllers.components.getComponentById)
  router.post('/component/:id/buy', auth.isAuthenticated, controllers.components.buyComponent)
  router.post('/component/:id/review', auth.isAuthenticated, controllers.components.addReview)

  router.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })

  app.use('/api/', router)
}
