import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
// import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {

    const flight = props.flight
    flight.sort((first, second) => first.departs - second.departs)

    const currentDate = new Date()

    return (

        <DefaultLayout>
            <div className='index' >
                <h3 className='header-index'>Flights Index View </h3>

                {/* <ul>
                    {flight.map((item, index) =>
                        (item.departs < Date.now()) ?
                            <span> <li key={index}> <a href={`/flight/${item._id}`}>{item.airline} <br></br>{item.flightNo}</a><br></br> {item.departs.toDateString()} </li> </span>
                            :
                            <li key={index}><a href={`/flight/${item._id}`}>{item.airline} <br></br>{item.flightNo}</a><br></br> {item.departs.toDateString()} </li>)
                    }
                </ul> */}

<div>
                    <table className='table'>
                        <thead>
                            <tr className="table-header">
                                <th>AIRLINE</th>
                                <th>FLIGHT NO.</th>
                                <th>DATE</th>
                                <th>TIME</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tbody className='t-body'>
                            {props.flight?.map((flight, index) => 
                                <tr style={flight.departs.getTime() < currentDate.getTime() ? {backgroundColor: '#FF0000'} : {backgroundColor: 'none'}} key={index}>
                                    <td>{flight.airline}</td>
                                    <td>{flight.flightNo}</td>
                                    <td>{flight.departs.toLocaleDateString()}</td>
                                    <td>{flight.departs.toLocaleTimeString()}</td>
                                    <td style={{fontWeight: '200', fontStyle: 'oblique'}}><a href={`/flight/${flight._id}`} style={{color: '#1A5F7A'}}>See details</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <br/><br/>

                <form className="form-index" action="/flight/new">
                    <button className="btn-index">ADD NEW FLIGHT</button>
                </form>

                {/* <form className="form-index" action="/flight/clear?_method=DELETE" method="POST">
                    <button className="btn-index">CLEAR</button>
                </form> */}
            </div>
          
                {/* <a href='/flight/new'> Add new Flight</a> */}

        </DefaultLayout>
    )
}

export default Index