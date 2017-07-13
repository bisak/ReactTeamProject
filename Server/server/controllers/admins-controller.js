const User = require('../data/User')
const Statistic = require('../data/Statistic')

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

  User.findOneAndUpdate({ username: newAdmin }, { $addToSet: { roles: 'admin' } }).then((data) => {
    return res.status(200).json({ success: true, data })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'Cannot add admin' })
  })
}
module.exports.removeAdmin = (req, res) => {
  let newAdmin = req.params.username

  User.findOneAndUpdate({ username: newAdmin }, { $pull: { roles: 'admin' } }).then((data) => {
    return res.status(200).json({ success: true, data })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'Cannot remove admin' })
  })
}
module.exports.getNonAdmins = (req, res) => {
  User.find({ roles: { $ne: 'admin' } }).sort('username').select('-password').then(users => {
    console.log(users)
    return res.status(200).json({ success: true, data: users })
  })
}
module.exports.banUser = (req, res) => {
  let newAdmin = req.params.username

  User.findOneAndUpdate({ username: newAdmin }, { banned: true }).then((data) => {
    return res.status(200).json({ success: true, data })
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

module.exports.getFullStats = (req, res) => {
  Statistic.find().sort('createdAt').then((statistics) => {
    let density = Math.round(statistics.length * 0.2)
    let statsToReturn = statistics.filter((stat, index) => (index % density === 0 || index === statistics.length - 1) && stat)
    let usersCount = statsToReturn.map(stat => stat.usersCount)
    let purchasesCount = statsToReturn.map(stat => stat.purchasesCount)
    let componentsCount = statsToReturn.map(stat => stat.componentsCount)
    console.log(statsToReturn)
    let times = statsToReturn.map(stat => new Date(stat.createdAt).toLocaleString())
    const dataToReturn = {
      usersCount,
      purchasesCount,
      componentsCount,
      times
    }
    return res.status(200).json({
      success: true,
      data: dataToReturn
    })
  }).catch(error => {
    console.log(error)
    return res.status(500).json({ success: false, msg: 'Server Error' })
  })
}
