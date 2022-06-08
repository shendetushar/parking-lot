const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/parking_lot";
let collection = {}

const carSchema = Schema({
    ownerName:{
        type: String,
        require:[true, 'Required field'],
        match: [/^[a-zA-Z]+()*[a-zA-Z]*()*[a-zA-Z]+$/, 'Enter a valid name']
    },
    registrationNumber: {
        type: String,
        required: [true, 'Required field'],
        unique: [true, 'Id should be unique one']
    },
    ticketNumber: {
        type: String,
        required: [true, 'Required field'],
        unique: [true, 'Id should be unique one']
    },
    color:{
        type: String,
        required: [true, 'Required field'],
    },
    company: {
        type: String,
        required: [true, 'Required field'],
        match: [/^[a-zA-Z]+()*[a-zA-Z]*()*[a-zA-Z]+$/, 'Enter a valid name']
    },
    contactNumber: {
        type: Number,
        required: [true, 'Required field'],
        match: [/^[6-9]+[0-9]{9}$/, 'Enter valid contact number']
    }
},
    { collection: "car" });


//for operations on Schema
collection.getCarCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then((database) => {
        return database.model('car', carSchema)
    }).catch(() => {
        let err = new Error("Could not connect to database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection