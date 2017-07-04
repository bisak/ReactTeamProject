const mongoose = require('mongoose')
const Component = require('../data/Component')
const User = require('../data/User')

let statisticSchema = mongoose.Schema({
  componentsCount: { type: mongoose.Schema.Types.Number },
  usersCount: { type: mongoose.Schema.Types.Number },
  purchasesCount: { type: mongoose.Schema.Types.Number }
}, { timestamps: true })

let Statistic = mongoose.model('Statistic', statisticSchema)

module.exports = Statistic
module.exports.updateStatistic = () => {
  let usersQuery = User.find().count()
  let componentsQuery = Component.find().select('buyers -_id')
  Promise.all([usersQuery, componentsQuery]).then((resolutions) => {
    const usersCount = resolutions[0]
    let components = resolutions[1]
    let componentsCount = components.length
    let purchasesCount = 0
    components.map(component => {
      purchasesCount += component.buyers.length
    })
    return Statistic.create({
      componentsCount: componentsCount,
      usersCount: usersCount,
      purchasesCount: purchasesCount
    }).then(() => {
      console.log('Updated stats at', new Date().toLocaleTimeString())
    })
  }).catch(error => {
    console.log(error)
  })
}
