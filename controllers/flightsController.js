const Flight = require('../models/flightsModel')



module.exports.index = async (req, res) => {
    // const flights = await Flight.find().sort({ createdAt: 1 })
    res.render('flights/Index')
}

module.exports.show = async (req, res) => {
    res.render('flights/Show')

}
