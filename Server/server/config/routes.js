const controllers = require('../controllers')
const auth = require('./auth')()
const router = require('express').Router()
const path = require('path')
const randomId = require('random-id')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'sources/')
  },
  filename: function (req, file, cb) {
    cb(null, randomId() + path.extname(file.originalname))
  }
})

const uploader = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // accept archives only
    if (!file.originalname.match(/\.(7z|7zip|rar|zip)$/)) {
      return cb(new Error('Only archive files are allowed!'), false)
    }
    cb(null, true)
  }
})

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
  router.put('/component/:id/edit', uploader.single('sourceCode'), auth.isAuthenticated('admin'), controllers.components.editComponent)
  router.post('/component/:id/delete', auth.isAuthenticated('admin'), controllers.components.deleteComponent)
  router.post('/component/:id/un-delete', auth.isAuthenticated('admin'), controllers.components.unDeleteComponent)
  router.get('/components', controllers.components.getComponents)
  router.get('/components/deleted', auth.isAuthenticated('admin'), controllers.components.getDeletedComponents)
  router.get('/components/bought', auth.isAuthenticated(), controllers.components.getBoughtComponents)
  router.get('/component/:id', auth.extractUserFromToken(), controllers.components.getComponentById)
  router.get('/component/:id/source', controllers.components.getComponentSource)
  router.post('/component/:id/buy', auth.isAuthenticated(), controllers.components.buyComponent)
  router.post('/component/:id/review', auth.isAuthenticated(), controllers.components.addReview)

  router.get('/stats/home', controllers.components.getHomeStats)
  router.get('/stats/all', auth.isAuthenticated('admin'), controllers.admins.getFullStats)

  router.all('*', (req, res) => {
    res.status(404).json({success: false, msg: '404 Not Found!'})
  })

  app.use('/api/', router)
}
