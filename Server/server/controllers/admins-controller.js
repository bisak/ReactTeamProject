const User = require('../data/User')

module.exports.getUsers = (req, res) => {
  let pageSize = 10
  let page = parseInt(req.query.page) || 1
  let search = req.query.search

  let query = User.find()
  if (search) {
    query = query.where('make').regex(new RegExp(search, 'i'))
  }
  query
    .sort('username')
    .select('-password')
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .then(users => {
      console.log(users)
      return res.status(200).json({ success: true, data: users })
    })
}
module.exports.getAdmins = (req, res) => {
  let pageSize = 10
  let page = parseInt(req.query.page) || 1
  let search = req.query.search

  let query = User.find({ roles: { $in: ['admin'] } })
  if (search) {
    query = query.where('make').regex(new RegExp(search, 'i'))
  }
  query
    .sort('username')
    .select('-password')
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .then(users => {
      console.log(users)
      return res.status(200).json({ success: true, data: users })
    })
}
module.exports.addAdmin = (req, res) => {
  let newAdmin = req.params.username

  User.findOneAndUpdate({ username: newAdmin }, { $addToSet: { roles: 'admin' } }).then(() => {
    return res.status(200).json({ success: true })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'Cannot add admin' })
  })
}
module.exports.removeAdmin = (req, res) => {
  let newAdmin = req.params.username

  User.findOneAndUpdate({ username: newAdmin }, { $pull: { roles: 'admin' } }).then(() => {
    return res.status(200).json({ success: true })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'Cannot remove admin' })
  })
}
module.exports.getNonAdmins = (req, res) => {
  let pageSize = 10
  let page = parseInt(req.query.page) || 1
  let search = req.query.search

  let query = User.find({ roles: { $ne: 'admin' } })
  if (search) {
    query = query.where('make').regex(new RegExp(search, 'i'))
  }
  query
    .sort('username')
    .select('-password')
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .then(users => {
      console.log(users)
      return res.status(200).json({ success: true, data: users })
    })
}
module.exports.banUser = (req, res) => {
  let newAdmin = req.params.username

  User.findOneAndUpdate({ username: newAdmin }, { banned: true }).then(() => {
    return res.status(200).json({ success: true })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'User banned' })
  })
}

module.exports.unbanUser = (req, res) => {
  let newAdmin = req.params.username

  User.findOneAndUpdate({ username: newAdmin }, { banned: false }).then(() => {
    return res.status(200).json({ success: true })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'User unbanned' })
  })
}
