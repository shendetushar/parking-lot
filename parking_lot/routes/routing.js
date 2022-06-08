const express = require('express')
const router = express.Router()
const middleService = require('../service/service')

//To log new car parking
router.post('/newparking', function (req, res, next) {
  let carObj = req.body
  middleService.newParking(carObj).then((result) => {
      res.json(result)
    })
    .catch((err) => next(err))
})

// To get registration number of all cars of same color
router.post('/allcars', function (req, res, next) {
  let color = req.body.color;
  middleService.getRegistrationNumbers(color).then((result) => {
      res.json(result)
    })
    .catch((err) => next(err))
})

// To get car details based on registration number
router.post('/ticketdetail', function (req, res, next) {
  let registrationNumber = req.body.registrationNumber;
  middleService.getTicketDetail(registrationNumber).then((result) => {
      res.json(result)
    })
    .catch((err) => next(err))
})

// To fetch all cars parking data
router.get('/alldata', function (req, res, next) {
  middleService.allParkingData().then((result) => {
      res.json(result)
    })
    .catch((err) => next(err))
})

// To delete the details of a car from parking system
router.delete('/deleteTicket', function (req, res, next) {
  let ticketNumber=req.body.ticketNumber;
  middleService.removeCarParking(ticketNumber).then((result) => {
      res.json(result)
    })
    .catch((err) => next(err))
})

module.exports = router
