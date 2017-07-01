const Component = require('../data/Component')
const Review = require('../data/Review')

module.exports.getComponentById = (req, res) => {
  let id = req.params.id
  Component.findById(id).populate('reviews').lean().then(component => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }
    component.bought = false
    if (req.user && component.buyers.indexOf(req.user.username) > -1) {
      component.bought = true
    }
    console.log(component)
    return res.status(200).json({ success: true, data: component })
  })
}
module.exports.getComponents = (req, res) => {
  let pageSize = 10
  let page = parseInt(req.query.page) || 1
  let search = req.query.search

  let query = Component.find()
  if (search) {
    query = query.where('make').regex(new RegExp(search, 'i'))
  }
  query
    .sort('-createdAt')
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .then(components => {
      return res.status(200).json({ success: true, data: components })
    })
}
module.exports.addComponent = (req, res) => {
  let componentObj = req.body

  Component.create(componentObj).then((createdComponent) => {
    return res.status(200).json({ success: true, data: createdComponent })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'Component cannot be create' })
  })
}
module.exports.editComponent = (req, res) => {
  let id = req.params.id
  let editedComponent = req.body

  Component.findById(id).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }

    component.name = editedComponent.name
    component.description = editedComponent.description
    component.price = editedComponent.price
    component.imageUrl = editedComponent.imageUrl
    component.demoUrl = editedComponent.demoUrl
    component.sourcePath = editedComponent.sourcePath
    component.save().then(() => {
      Review.find({ component: component._id }).then((reviews) => {
        component.reviews = reviews
        return res.status(200).json({ success: true, data: component })
      })
    })
  })
}
module.exports.deleteComponent = (req, res) => {
  let id = req.params.id
  Component.findByIdAndRemove(id).then((removedComponent) => {
    Review.remove({ component: removedComponent._id }).then(() => {
      return res.status(200).json({ success: true })
    })
  })
}
module.exports.buyComponent = (req, res) => {
  let componentId = req.params.id
  let buyer = req.user.username
  Component.findByIdAndUpdate(
    componentId,
    { $addToSet: { buyers: buyer } })
    .then((component) => {
      if (!component) {
        return res.status(404).json({ success: false, msg: 'Component was not found' })
      } else if (component.buyers.indexOf(buyer) > -1) {
        return res.status(400).json({ success: false, msg: 'Component is already bought' })
      } else {
        return res.status(200).json({ success: true, msg: 'Component bought successfully' })
      }
    })
    .catch(console.log)
}
module.exports.addReview = (req, res) => {
  let review = req.body
  let componentId = req.params.id
  review.creator = req.user.username
  review.component = componentId

  Component.findById(componentId).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }
    Review.create(review)
      .then(() => {
        return res.status(200).json({ success: true, msg: 'Review added successfully' })
      })
  })
}
