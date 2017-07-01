const Component = require('../data/Component')
const Review = require('../data/Review')

module.exports.getComponentById = (req, res) => {
  let id = req.params.id
  Component.findById(id).then(component => {
    if (!component) {
      return res.sendStatus(404)
    }
    res.send(component)
    Review.find({ component: component._id }).then((reviews) => {
      component.reviews = reviews
      res.send(component)
    })
  })
}
module.exports.addComponent = (req, res) => {
  let componentObj = req.body

  let componentToCreate = {
    name: componentObj.name,
    description: componentObj.description,
    price: componentObj.price,
    image: componentObj.image,
    demo: componentObj.demo
  }

  Component.create(componentToCreate).then((createdComponent) => {
    return res.send(createdComponent)
  }).catch((err) => {
    res.status(500).send(err)
  })
}
module.exports.editComponent = (req, res) => {
  let id = req.params.id
  let editedComponent = req.body

  Component.findById(id).then((component) => {
    if (!component) {
      return res.sendStatus(404)
    }

    component.name = editedComponent.name
    component.description = editedComponent.description
    component.price = editedComponent.price
    component.image = editedComponent.image
    component.demo = editedComponent.demo
    component.save().then(() => {
      Review.find({ component: component._id }).then((reviews) => {
        component.reviews = reviews
        res.send(component)
      })
    })
  })
}
module.exports.deleteComponent = (req, res) => {
  let id = req.params.id
  Component.findByIdAndRemove(id).then((removedComponent) => {
    Review.remove({ component: removedComponent._id }).then(
      res.sendStatus(200)
    )
  })
}
module.exports.buyComponent = (req, res) => {
  let id = req.params.id
  // TODO: authenticate user and proceed the request :) 
}
module.exports.addReview = (req, res) => {
  let id = req.params.id
  // TODO: authenticate user and proceed the request :) 
}