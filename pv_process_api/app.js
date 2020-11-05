var express = require('express')
var logger = require('morgan')

var indexRouter = require('./routes/index')
const { exit } = require('process')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// load dev env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// check env
if (!process.env.ENERGY_MANAGER_API) {
  console.log('[FATAL] no energy manager api endpoint specified, please set ENERGY_MANAGER_API env')
  exit(1)
}

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

module.exports = app
