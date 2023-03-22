import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  return (
    <DefaultLayout>
      <div>

        <h1>Airline: {props.flight.airline}</h1>
        <h1>FlightNo: {props.flight.flightNo}</h1>
        <h1>Departs: {props.flight.departs.toString}</h1>
        <h1>Airport: {props.flight.airport}</h1>

        <br />
        <br />

        <div >
          
          <a href="/flight">
            <button>Back</button>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;