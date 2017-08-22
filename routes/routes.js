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

module.exports = router
