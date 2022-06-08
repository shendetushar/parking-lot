const collection = require('../utilities/connection')

const carDb = [
  {
    ownerName:'Tushar',
    registrationNumber: 'R1001',
    ticketNumber: 'Tick301',
    color: 'Black',
    company: 'Audii',
    contactNumber: '7083835275',
  },
  {
    ownerName:'Ram',
    registrationNumber: 'P5000',
    ticketNumber: 'Tick302',
    color: 'blue',
    company: 'skoda',
    contactNumber: '7083835275',
  },
]

exports.setupDb = () => {
  return collection.getCarCollection().then((model) => {
    return model.deleteMany().then(() => {
      return model.insertMany(carDb).then((data) => {
        if (data) {
          return 'Insertion Successfull'
        } else {
          let err = new Error('Insertion failed')
          err.status = 400
          throw err
        }
      })
    })
  })
}
