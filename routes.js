import express from 'express'
var router = express.Router()
import request from 'request'


//email api
router.get(`/email/:email`, function (req, res, next) {
  var options = {
    method: 'GET',
    url: `https://api.seon.io/SeonRestService/email-api/v2.2/${req.params.email}`,
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

//ip api 
router.get(`/ip/:ip`, function (req, res, next) {
  var options = {
    method: 'GET',
    url: `https://api.seon.io/SeonRestService/ip-api/v1.1/${req.params.ip}`,
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

//phone number api
router.get(`/phone/:num`, function (req, res, next) {
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

export default router



