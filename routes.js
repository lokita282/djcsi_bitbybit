import express from 'express'
var router = express.Router()
import request from 'request'
import axios from 'axios'

const emailTech = [
  'apple',
  'github',
  'adobe',
  'wordpress',
  'jdid',
  'samsung',
  'zoho',
  'envato',
  'patreon',
  'atlassian',
]
const emailEcomm = [
  'ebay',
  'amazon',
  'flipkart',
  'bukalapak',
  'lazada',
  'tokopedia',
]
const emailSocial = [
  'facebook',
  'google',
  'gravatar',
  'instagram',
  'linkedin',
  'microsoft',
  'pinterest',
  'myspace',
  'skype',
  'tumblr',
  'vimeo',
  'twitter',
  'weibo',
  'yahoo',
  'discord',
  'ok',
  'kakao',
  'qzone',
  'mailru',
  'imgur',
]
const emailSearch = ['rambler', 'foursquare']
const emailNews = ['flickr']
const emailMusic = ['lastfm', 'spotify']
const emailTravel = ['booking', 'airbnb']
const emailOTT = ['disneyplus', 'netflix']
const emailEducation = ['archiveorg', 'evernote', 'quora']

var registeredEmailTech = []
var registeredEmailEcomm = []
var registeredEmailSocial = []
var registeredEmailSearch = []
var registeredEmailNews = []
var registeredEmailMusic = []
var registeredEmailTravel = []
var registeredEmailOTT = []
var registeredEmailEducation = []

var resEmail = {}

//email api - all
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

router.get(`/email/regiTrue/:email`, function (req, res, next) {
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

    var x = JSON.parse(response.body)
    var accounts = Object.keys(x.data.account_details)

    accounts.forEach((account) => {
      if (emailTech.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailTech.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailEcomm.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailEcomm.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailSocial.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailSocial.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailSearch.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailSearch.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailNews.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailNews.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailMusic.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailMusic.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailTravel.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailTravel.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailOTT.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailOTT.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      } else if (emailEducation.includes(account)) {
        if (x.data.account_details[account].registered === true) {
          registeredEmailEducation.push({
            name: account,
            isRegisered: x.data.account_details[account].registered,
          })
        }
      }
    })
    resEmail = {
      registeredEmailTech,
      registeredEmailEcomm,
      registeredEmailSocial,
      registeredEmailSearch,
      registeredEmailNews,
      registeredEmailMusic,
      registeredEmailTravel,
      registeredEmailOTT,
      registeredEmailEducation,
    }
    console.log(resEmail)
    res.json({
      data: resEmail,
    })
  })
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
