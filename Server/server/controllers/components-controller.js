const Component = require('../data/Component')
const Review = require('../data/Review')
const Statistic = require('../data/Statistic')
const path = require('path')

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
  }).catch(error => {
    console.log(error)
    if (error.name === 'CastError' && error.path === '_id') {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }
    return res.status(500).json({ success: false, msg: 'An error occured.' })
  })
}
module.exports.getComponents = (req, res) => {
  let pageSize = 5
  let page = Number(req.query.page) || 1
  let search = req.query.search

  let queryArray = []

  let countQuery = Component.find({ isVisible: true })
  let mainQuery = Component.find({ isVisible: true })

  if (search) {
    mainQuery = mainQuery.where('name').regex(new RegExp(search, 'i'))
    countQuery = countQuery.where('name').regex(new RegExp(search, 'i'))
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
      objToReturn.pagesCount = Math.ceil(resolutions[1] / 5)
      return res.status(200).json({ success: true, data: objToReturn })
    })
    .catch(error => {
      console.log(error)
      return res.status(500).json({ success: false, msg: 'An error occured.' })
    })
}

module.exports.getBoughtComponents = (req, res) => {
  let username = req.user.username
  let pageSize = 5
  let page = Number(req.query.page) || 1
  let search = req.query.search

  let queryArray = []

  let countQuery = Component.find({ buyers: username })
  let mainQuery = Component.find({ buyers: username })

  if (search) {
    mainQuery = mainQuery.where('name').regex(new RegExp(search, 'i'))
    countQuery = countQuery.where('name').regex(new RegExp(search, 'i'))
  }

  mainQuery
    .sort('-updatedAt')
    .skip((page - 1) * pageSize)
    .limit(pageSize)

  countQuery.count()

  queryArray.push(mainQuery)
  queryArray.push(countQuery)

  Promise.all(queryArray)
    .then(resolutions => {
      let objToReturn = {}
      objToReturn.products = resolutions[0]
      objToReturn.pagesCount = Math.ceil(resolutions[1] / 5)
      return res.status(200).json({ success: true, data: objToReturn })
    })
    .catch(error => {
      console.log(error)
      return res.status(500).json({ success: false, msg: 'An error occured.' })
    })
}

module.exports.getDeletedComponents = (req, res) => {
  let pageSize = 5
  let page = Number(req.query.page) || 1
  let search = req.query.search

  let queryArray = []

  let countQuery = Component.where({ isVisible: false }).find()
  let mainQuery = Component.where({ isVisible: false }).find()

  if (search) {
    mainQuery = mainQuery.where('name').regex(new RegExp(search, 'i'))
    countQuery = countQuery.where('name').regex(new RegExp(search, 'i'))
  }

  mainQuery
    .sort('-updatedAt')
    .skip((page - 1) * pageSize)
    .limit(pageSize)

  countQuery.count()

  queryArray.push(mainQuery)
  queryArray.push(countQuery)

  Promise.all(queryArray)
    .then(resolutions => {
      let objToReturn = {}
      objToReturn.products = resolutions[0]
      objToReturn.pagesCount = Math.ceil(resolutions[1] / 5)
      return res.status(200).json({ success: true, data: objToReturn })
    })
    .catch(error => {
      console.log(error)
      return res.status(500).json({ success: false, msg: 'An error occured.' })
    })
}

module.exports.addComponent = (req, res) => {
  let sourceCode = req.file
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
  let newSourceCode = req.file
  let id = req.params.id
  let editedComponent = JSON.parse(req.body.data)

  Component.findById(id).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }
    component.name = editedComponent.name
    component.description = editedComponent.description
    component.price = editedComponent.price
    component.imageUrl = editedComponent.imageUrl
    component.demoUrl = editedComponent.demoUrl
    if (newSourceCode) {
      component.sourcePath = newSourceCode.filename
    }
    component.save().then(() => {
      Review.find({ component: component._id }).then((reviews) => {
        component.reviews = reviews
        return res.status(200).json({ success: true, data: component })
      })
    })
  }).catch(error => {
    console.log(error)
    return res.status(500).json({ success: false, msg: 'An error occured.' })
  })
}

module.exports.deleteComponent = (req, res) => {
  let componentId = req.params.id
  Component.findByIdAndUpdate(componentId, { isVisible: false }).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    }
    return res.status(200).json({ success: true, data: component, msg: 'Component deleted successfully' })
  }).catch(console.log)
}

module.exports.unDeleteComponent = (req, res) => {
  let componentId = req.params.id
  Component.findByIdAndUpdate(componentId, { isVisible: true }).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    } else {
      return res.status(200).json({ success: true, data: component, msg: 'Component un-deleted successfully' })
    }
  }).catch(console.log)
}

module.exports.buyComponent = (req, res) => {
  let componentId = req.params.id
  let buyer = req.user.username
  Component.findByIdAndUpdate(componentId, { $addToSet: { buyers: buyer } }).then((component) => {
    if (!component || !component.isVisible) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    } else if (component.buyers.indexOf(buyer) > -1) {
      return res.status(400).json({ success: false, msg: 'Component is already bought' })
    } else {
      return res.status(200).json({ success: true, msg: 'Component bought successfully' })
    }
  }).catch(console.log)
}

module.exports.getComponentSource = (req, res) => {
  let componentId = req.params.id
  Component.findById(componentId).then((component) => {
    if (!component) {
      return res.status(404).json({ success: false, msg: 'Component was not found' })
    } else {
      let sourceFile = path.join(__dirname, '/../../sources', component.sourcePath)
      return res.status(200).download(sourceFile)
    }
  }).catch(error => {
    console.log(error)
    return res.status(500).json({ success: false, msg: 'Server Error' })
  })
}

module.exports.addReview = (req, res) => {
  console.log(req.user)
  if (req.user.banned) {
    return res.status(400).json({ success: false, msg: 'You cannot add reviews' })
  }
  let review = req.body
  let componentId = req.params.id
  review.creator = req.user.username
  console.log(req.user)
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
    return res.status(500).json({ success: false, msg: 'Server Error' })
  })
}

module.exports.getHomeStats = (req, res) => {
  Statistic.findOne().sort('-createdAt').then((statistic) => {
    return res.status(200).json({ success: true, data: statistic })
  }).catch(error => {
    console.log(error)
    return res.status(500).json({ success: false, msg: 'Server Error' })
  })
}
