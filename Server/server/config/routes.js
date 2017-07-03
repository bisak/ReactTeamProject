const controllers = require('../controllers')
const auth = require('./auth')()
const router = require('express').Router()

const multer = require('multer')

const uploader = multer({dest: 'sources/'})

module.exports = (app) => {
  router.post('/users/register', controllers.users.register)
  router.post('/users/login', controllers.users.login)

  router.get('/users/admins', auth.isAuthenticated('admin'), controllers.admins.getAdmins)
  router.get('/users/non-admins', auth.isAuthenticated('admin'), controllers.admins.getNonAdmins)
  router.get('/users', auth.isAuthenticated('admin'), controllers.admins.getUsers)

  router.get('/users/:username', controllers.users.getUserById)
  router.post('/users/:username/make-admin', auth.isAuthenticated('admin'), controllers.admins.addAdmin)
  router.post('/users/:username/remove-admin', auth.isAuthenticated('admin'), controllers.admins.removeAdmin)
  router.post('/users/:username/ban', auth.isAuthenticated('admin'), controllers.admins.banUser)
  router.post('/users/:username/unban', auth.isAuthenticated('admin'), controllers.admins.unbanUser)

  router.post('/component/add', uploader.single('sourceCode'), auth.isAuthenticated('admin'), controllers.components.addComponent)
  router.put('/component/:id/edit', auth.isAuthenticated('admin'), controllers.components.editComponent)
  router.post('/component/:id/delete', auth.isAuthenticated('admin'), controllers.components.deleteComponent)
  router.post('/component/:id/un-delete', auth.isAuthenticated('admin'), controllers.components.unDeleteComponent)
  router.get('/components', controllers.components.getComponents)
  router.get('/components/deleted', auth.isAuthenticated('admin'), controllers.components.getDeletedComponents)
  router.get('/components/bought', auth.isAuthenticated(), controllers.components.getBoughtComponents)
  router.get('/component/:id', auth.extractUserFromToken(), controllers.components.getComponentById)
  router.post('/component/:id/buy', auth.isAuthenticated(), controllers.components.buyComponent)
  router.post('/component/:id/review', auth.isAuthenticated(), controllers.components.addReview)

  router.get('/home/stats', controllers.components.getHomeStats)

  router.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })

  app.use('/api/', router)
}
