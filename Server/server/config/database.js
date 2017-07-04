const mongoose = require('mongoose')
const User = require('../data/User')
const Statistic = require('../data/Statistic')

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }

    console.log('MongoDB ready!')

    User.seedAdminUser()
    Statistic.updateStatistic()
    setInterval(Statistic.updateStatistic, settings.statisticsUpdateInterval)
  })

  db.on('error', err => console.log(`Database error: ${err}`))
}
