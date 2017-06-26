const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.post('/users/register', controllers.users.register)
  app.post('/users/login', controllers.users.login)
  app.post('/users/logout', controllers.users.logout)

  app.post('/component/add', auth.isInRole('Admin'), controllers.components.addComponent)
  app.put('/component/edit', auth.isInRole('Admin'), controllers.components.editComponent)
  app.post('/component/delete', auth.isInRole('Admin'), controllers.components.deleteComponent)
  app.get('/component/:id', controllers.components.getComponentById)
  app.post('/component/:id/buy', auth.isAuthenticated, controllers.components.buyComponent)
  app.post('/component/:id/review', auth.isAuthenticated, controllers.components.addReview)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
