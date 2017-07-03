const Component = require('../data/Component')
const Review = require('../data/Review')
const User = require('../data/User')

module.exports.getComponentById = (req, res) => {
  let id = req.params.id
  Component.findById(id).populate('reviews', '', null, { sort: { 'createdAt': -1 } }).lean().then(component => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }
    component.bought = false
    if (req.user && component.buyers.indexOf(req.user.username) !== -1) {
      component.bought = true
    }
    return res.status(200).json({ success: true, data: component })
  })
}
module.exports.getComponents = (req, res) => {
  let pageSize = 10
  let page = Number(req.query.page) || 1
  let search = req.query.search

  let queryArray = []

  let countQuery = Component.find()
  let mainQuery = Component.find()

  if (search) {
    mainQuery = mainQuery.where('name').regex(new RegExp(search, 'i'))
    countQuery = mainQuery.where('name').regex(new RegExp(search, 'i'))
  }

  mainQuery
    .sort('-createdAt')
    .skip((page - 1) * pageSize)
    .limit(pageSize)

  countQuery.count()

  queryArray.push(mainQuery)
  queryArray.push(countQuery)

  Promise.all(queryArray)
    .then(resolutions => {
      let objToReturn = {}
      objToReturn.products = resolutions[0]
      objToReturn.pagesCount = Math.ceil(resolutions[1] / 10)
      return res.status(200).json({ success: true, data: objToReturn })
    })
    .catch(error => {
      console.log(error)
      return res.status(500).json({success: false, msg: 'An error occured.'})
    })
}
module.exports.addComponent = (req, res) => {
  let sourceCode = req.file
  console.log(sourceCode)
  let productData = JSON.parse(req.body.data)
  if (!sourceCode) {
    return res.status(400).json({ success: false, msg: 'No file supplied' })
  }
  productData.sourcePath = sourceCode.filename

  Component.create(productData).then((createdComponent) => {
    return res.status(200).json({ success: true, data: createdComponent })
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({ success: false, msg: 'Component cannot be created' })
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
  Component.findByIdAndUpdate(componentId, { $addToSet: { buyers: buyer } }).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    } else if (component.buyers.indexOf(buyer) > -1) {
      return res.status(400).json({ success: false, msg: 'Component is already bought' })
    } else {
      return res.status(200).json({ success: true, msg: 'Component bought successfully' })
    }
  }).catch(console.log)
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
    return Review.create(review).then((review) => {
      component.reviews.push(review._id)
      component.save().then(() => {
        return res.status(200).json({ success: true, data: review, msg: 'Review added successfully' })
      })
    })
  }).catch(error => {
    console.log(error)
    return res.status(500).json({success: false, msg: 'Server Error'})
  })
}

module.exports.getHomeStats = (req, res) => {
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
    return res.status(200).json({success: true, data: {componentsCount, usersCount, purchasesCount}})
  }).catch(error => {
    console.log(error)
    return res.status(500).json({success: false, msg: 'Server Error'})
  })
}
