const Flight = require('../models/flightsModel')



module.exports.index = async (req, res) => {
    // const flights = await Flight.find().sort({ createdAt: 1 })
    try {
        const flightData = await Flight.find()
        res.render('flights/Index', {flight: flightData})
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}


module.exports.new = async (req, res) => {
    const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/New', {departsDate});

}
module.exports.show = async (req, res) => {
    res.render('flights/Show')

}
// Create to add new flights 
module.exports.create = async (req, res) => {
 try {
    await Flight.create(req.body);
}catch (err){
    console.log(err);
    res.send(err.message)
}
res.redirect('/flight')

}