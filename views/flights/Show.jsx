import React from "react"
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {
    console.log('/n THIS IS PROPS')
    console.log(props);
    let airportsDestinations = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']

    for (let i = 0; i < props.flight.destinations.length; i++) {
        const index = airportsDestinations.findIndex(item => item == props.flight.destinations[i].airport)
        airportsDestinations.splice(index, 1);
    }
    console.log(airportsDestinations);

    const currentDate = new Date()
    // console.log('destinations' + props.item.arrival)
    const flightDeparture = (new Date(props.flight.departs)).toLocaleString();
    
    return (
        <DefaultLayout>
            <div>
                <h1 className="title">{props.flight.airline} {props.flight.flightNo}</h1>
                <div className="details-box">
                    <p>From: {props.flight.airport}</p>
                    <p>Departs: {flightDeparture}</p>

                    {props.flight.destinations.length ?
                        <>
                            <p>Destinations:</p>

                            {props.flight?.destinations?.map((item, index) =>
                                <div className="destination-box" key={index}>
                                    <p>To: {item.airport}</p>
                                    {/* <p>Arrival: {item.arrival.toLocaleDateString()} at {item.arrival.toLocaleDateString()}</p> */}
                                    <form className="form-index" action={`/flight/${props.flight._id}/destinations/${item._id}`}>
                                        <button className="btn-destination">EDIT</button>
                                    </form>

                                    <form className="form-index" action={`/flight/${props.flight._id}/destinations/${item._id}?_method=DELETE`} method="POST">
                                        <button className="btn-destination">Delete Destination</button>
                                    </form>
                                    <br /><br />
                                </div>
                            )}
                        </>
                        :
                        <>
                            Destinations: No Flights at this destination
                            <br /><br />
                        </>
                    }
                </div>

                <details className="add-destination">
                    <summary>ADD A DESTINATION</summary>
                    <br /><br />
                    <form action={`/flight/${props.flight._id}/destinations`} method="POST">
                        <label htmlFor="airport">Select Airport:</label><br />
                        <select id="airport" name="airport">
                            {airportsDestinations.map((destination, index) => 
                                <div key={index}>
                                    <option value={destination}>{destination}</option>
                                </div>
                            )}
                        </select>

                        <br /><br />

                        <label htmlFor="arrival">Arrival:</label><br />
                        <input type="datetime-local" id="arrival" name="arrival" defaultValue={props.departsDate} /><br /><br />
                        <button className="btn-destination">Add Destination</button>
                    </form>
                </details>

                <br /><br />

                <form className="form-index" action="/flight">
                    <button className="btn-index">BACK</button>
                </form>

                <form className="form-index" action={`/flight/${props.flight._id}/edit`}>
                    <button className="btn-index">Edit Flight</button>
                </form>

                <form className="form-index" action={`/flight/${props.flight._id}?_method=DELETE`} method="POST">
                    <button className="btn-index">Delete Flight </button>
                </form>
            </div>
        </DefaultLayout>

    )
}

export default Show;