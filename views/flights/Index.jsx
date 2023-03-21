import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {


    return (
               <div >
                <h1>Flights Index View </h1>

                <ul>
                    {props.flight.map((item, index) => <li>{item.airline} <br></br>{item.flightNo}<br></br> {item.departs.toDateString()} </li> )}           
                </ul>

                <a href='/flight/new'> Add new Flight</a>
               </div>
          
    )
}

export default Index