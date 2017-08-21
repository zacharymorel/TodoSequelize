const express = require('express')
const router = express.Router()
const models = require('../models/todoSchema')

router.get('/', (request, response) => {
  response.send('Hello World!')
})

module.exports = router
