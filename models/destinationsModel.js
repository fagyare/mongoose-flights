const mongoose = require('mongoose')


const Schema = mongoose.Schema 

const destinationsSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ]
  },
    arrival: {type: Date}
})

const Destination = mongoose.model('destinations', destinationsSchema)

module.exports = Destination;

