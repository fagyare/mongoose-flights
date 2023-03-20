import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {

    // function dateHasPassed(date) {
    //     let today = new Date()
    //     let dateToCheck = new Date(date)
    //     return dateToCheck.getTime() < today.getTime()
    // }
    
    

    return (
               <div >
                <h1>Flights Index View </h1>
                <ul>
                    {props.flights.airline}
                    {props.flights.flightNo}
                    {props.flights.daparts}

                </ul>
               </div>
          
    )
}

export default Index