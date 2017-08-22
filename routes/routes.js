const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (request, response) => {
  models.ToDo
    .findAll()
    .then(todo => {
      response.render('home', { todo })
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/createToDo', (request, response) => {
  const todo = models.ToDo.build({
    title: {request.body.title}
    description: {request.body.description}
  })

  todo.save().then(newTodo => {
    response.redirect('/')
  })
})
module.exports = router
