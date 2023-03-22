import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
// import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {

    const flight = props.flight
    flight.sort((first, second) => first.departs - second.departs)

    return (

        <DefaultLayout>
            <div >
                <h1>Flights Index View </h1>

                <ul>
                    {flight.map((item, index) =>
                        (item.departs < Date.now()) ?
                            <span> <li key={index}>{item.airline} <br></br>{item.flightNo}<br></br> {item.departs.toDateString()} </li> </span>
                            :
                            <li key={index}>{item.airline} <br></br>{item.flightNo}<br></br> {item.departs.toDateString()} </li>)
                    }
                </ul>
          
                <a href='/flight/new'> Add new Flight</a>

            </div>
        </DefaultLayout>
    )
}

export default Index