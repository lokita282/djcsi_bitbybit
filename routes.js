import express from 'express'
var router = express.Router()
import request from 'request'


router.get(`/:num`, function (req, res, next) {
  var options = {
    method: 'GET',
    url: `https://api.seon.io/SeonRestService/phone-api/v1.4/${req.params.num}`,
    headers: {
      'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
      'Content-Type': 'application/json',
    },
  }
  request(options, function (error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  }).pipe(res)
})

// module.exports = router
export default router



