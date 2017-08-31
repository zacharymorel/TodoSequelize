const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(routes)


app.listen(3000, () => {
  console.log("We're listening on 3000!")
})