const dbModel = require('../utilities/connection');
const carModel = {}

// generate Ticket number for new parked car
carModel.generateTicketNumber = () => {
    return dbModel.getCarCollection().then((model) => {
        return model.distinct("ticketNumber").then((tNO) => {
            let tId = tNO.map((data) => { return Number(data.slice(4)) })
            let bId = Math.max(...tId);
            let ticketNumber= "Tick" + (bId + 1);
            if(ticketNumber=="U-Infinity"){
            return "Tick"+301
            }else {
                return ticketNumber;
            }
        })
    })
}

//To add car data in DB
carModel.newParking = (carObj) => {
    return dbModel.getCarCollection().then(model => {
        return model.create(carObj).then((response) => {
            if (response === null) {
                return null;
            } else {
                return response;
            }
        })
    })
}

//To get registration numbers of all cars of particular color
carModel.getRegistrationNumbers = (color) => {
    return dbModel.getCarCollection().then(model => {
        return model.find({ "color": color }).then((carData) => {
            if (carData === null) {
                return null;
            } else {
                return carData;
            }
        })
    })
}

// To get car details based on registration number
carModel.getTicketDetail = (registrationNumber) => {
    return dbModel.getCarCollection().then(model => {
        return model.find({ "registrationNumber": registrationNumber }).then((ticketData) => {
            if (ticketData === null) {
                return null;
            } else {
                return ticketData;
            }
        })
    })
}

//Fetch all cars parking data
carModel.allParkingData = () => {
    return dbModel.getCarCollection().then(model => {
        return model.find().then((parkingData) => {
            if (parkingData === null) {
                return null;
            } else {
                return parkingData;
            }
        })
    })
}

// To delete the details of a car from parking system
carModel.removeCarParking=(ticketNumber)=>{
    return dbModel.getCarCollection().then(model=>{
        return model.deleteOne({"ticketNumber":ticketNumber}).then((response)=>{
            if(response.deletedCount==0){
                return null;
            }else {
                return response;
            }
        })
    })
}

module.exports = carModel;