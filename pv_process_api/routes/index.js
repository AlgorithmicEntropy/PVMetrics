var express = require('express')
const request = require('request')
var router = express.Router()

function compare (a, b) {
  if (a.guid < b.guid) { return -1 } else { return 1 }
}

/* GET api call */
router.get('/pv', function (req, res, next) {
  request(process.env.ENERGY_MANAGER_API, (err, response, body) => {
    if (err) { return console.log(err) }
    const obj = JSON.parse(body)
    // process
    obj.result.items.sort(compare)
    res.send(JSON.stringify(obj))
  })
})

router.get('/health', function (req, res, next) {
  res.status(200)
  res.end()
})

module.exports = router
