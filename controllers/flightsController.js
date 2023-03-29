const Flight = require('../models/flightsModel')
const Destination = require('../models/destinationsModel')


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
// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    // populate replaces the ids with actual documents/objects we can use
    
    const flight = await Flight.findById(req.params.id).populate('destinations', 'airport')
    const flightDestinations = await Destination.find({ _id: { $in: flight.destinations}});
    delete flight.destinations;
    flight.destinations = flightDestinations;
    console.log(flightDestinations)

    console.log('/nTHIS IS FLIGHT')
    console.log(flight);
    res.render('flights/Show', {
        flight: {
            airline: flight.airline,
            flightNo: flight.flightNo,
            departs: flight.departs,
            airport: flight.airport,
            destinations: flightDestinations
        }
    });
}


module.exports.delete = async (req, res) => {
    // first find the post, store it in a variable, then delete it from database
    const flight = await Flight.findByIdAndDelete(req.params.id)
    // delete all comments where the comment id 
    await Destination.deleteMany({ _id: { 
        // equals/matches any comment ids in this array
        $in: flight.destinations 
    }})
    res.redirect('/flight')
}

module.exports.update = async (req, res) => {
    await Flight.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/flight/${req.params.id}`)
}

module.exports.edit = async (req, res) => {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/Edit', { flight })
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

module.exports.clear = async (req, res) => {
    try {
        await Flight.deleteMany({})
        res.redirect('/flight')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}



// EXTRA LOGIC (for destinations)
module.exports.createDestination = async (req, res) => {
    // create a document in our destination collection
    const destination = await Destination.create(req.body)
    console.log(destination)
    // find the flight
    await Flight.findByIdAndUpdate(req.params.id, {
        // and push the new destination document's id
        $push: {
            // to the destination's flight field/property
            destinations: destination._id
        }
    })
    res.redirect(`/flight/${req.params.id}`)
}

module.exports.indexDestination = async (req, res) => {
    // target the destination property 
    res.send('')
}

module.exports.showDestination = async (req, res) => {
    // find the destination and filter it's destinations property array
    const destination = await Destination.findById(req.params.did)
    res.render('destinations/Edit', { flightId: req.params.id, destination })
}

module.exports.updateDestination = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    await Destination.findByIdAndUpdate(req.params.did, req.body)
    res.redirect(`/flight/${req.params.id}`)
}

module.exports.deleteDestination = async (req, res) => {
    // first use the id to delete the comment from the comments collection
    await Destination.findByIdAndDelete(req.params.did)
    // then use the post's id to find the post
    await Flight.findByIdAndUpdate(req.params.id, {
        // and pull/remove the reference id (to the comment) from
        $pull: {
            // the comments array
            destinations: req.params.did
        }
    })
    res.redirect(`/flights/${req.params.id}`)
}