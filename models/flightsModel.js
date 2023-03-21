const mongoose = require('mongoose')


const Schema = mongoose.Schema 

const flightsSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United' ]
  },

    flightNo: {type: Number, min: 10, max: 9999},
    departs: { type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) }
    // ts: {type: Date, required: true},
})

const Flight = mongoose.model('flights', flightsSchema)

module.exports = Flight;

