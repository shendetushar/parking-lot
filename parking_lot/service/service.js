const carModel = require('../model/carModel')
let middleService = {}

// To add car data to the DB
middleService.newParking = (carObj) => {
  return carModel.generateTicketNumber().then((data) => {
    carObj.ticketNumber = data
    return carModel.newParking(carObj).then((response) => {
      if (response) {
        const message="Your parking lot is booked and your ticket number is "+response.ticketNumber
        return message
      } else {
        let err = new Error('Failed to book a parking slot')
        err.status = 404
        throw err
      }
    })
  })
}

// To get registration number of all cars of same color
middleService.getRegistrationNumbers =(color) => {
  return carModel.getRegistrationNumbers(color).then((response) => {
      if (response) {
        // const getRegistrationNumbers=[]
        // const ownerName=[]
        // response.forEach(element => {
        //   getRegistrationNumbers.push(element.registrationNumber)
        //   ownerName.push(element.ownerName)
        // });
        return response;
      } else {
        let err = new Error('Unable to find car of '+color+' color')
        err.status = 404
        throw err
      }
    })
}

// To get car details based on registration number
middleService.getTicketDetail = (registrationNumber) => {
  return carModel.getTicketDetail(registrationNumber).then((response) => {
    if (response) {
      return response
    } else {
      let err = new Error('Ticket details for this registration is not available')
      err.status = 404
      throw err
    }
  })
}

//Fetch all cars parking data
middleService.allParkingData=()=>{
  return carModel.allParkingData().then((response)=>{
    if(response){
      return response;
    } else {
      let err = new Error('Failed to get the parking data')
      err.status = 404
      throw err
    }
  })
}

// To delete the details of a car from parking system
middleService.removeCarParking=(ticketNumber)=>{
  return carModel.removeCarParking(ticketNumber).then((response)=>{
    if(response){
      const message="Ticket number "+ticketNumber+" deleted successfully"
      return message;
    }else {
      let err = new Error("Ticket number "+ticketNumber+" not found in system")
      err.status = 404
      throw err
    }
  })
}

module.exports = middleService
