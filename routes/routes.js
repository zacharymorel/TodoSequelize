const express = require('express')
const router = express.Router()
const models = require('../models')

// DISPLAYING ALL ToDos ON PAGE
router.get('/', (request, response) => {
  models.ToDo
    .findAll()
    .then(todo => {
      response.render('home', {
        todo: todo.filter(item => !item.completed),
        completedToDO: todo.filter(item => item.completed)
      })
    })
    .catch(err => {
      console.log(err)
    })
})

// CREATING A ToDo
router.post('/createToDo', (request, response) => {
  const todo = models.ToDo.build({
    title: request.body.title,
    description: request.body.description
  })

  todo.save().then(newTodo => {
    response.redirect('/')
  })
})

// CHANGING A ToDo STATUS TO COMPLETED
router.post('/complete/:id', (request, response) => {
  const id = parseInt(request.body.id)
  models.ToDo
    .update(
      {
        completed: true
      },
      {
        where: {
          id: id
        }
      }
    )
    // .save()
    .then(completedToDO => {
      response.redirect('/')
    })
})

// DELETING A ToDo
router.post('/delete/:id', (request, response) => {
  const id = parseInt(request.body.id)
  models.ToDo
    .destroy({
      where: { id: id }
    })
    .then(deletedToDo => {
      response.redirect('/')
    })
})

module.exports = router
