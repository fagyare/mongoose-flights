import React from 'react'

function New() {

    return(
<div>
      <h1>New flights Log</h1>
      <form action="/capLog" method="POST">
        <label htmlFor="air">Airline:</label>
        <br />
        <input type="text" id="air" name="airline" />
        <br />
        <br />

        <label htmlFor="fno">Flight No:</label>
        <br />
        <input type="text" id="fno" name="flightNo" />
        <br />
        <br />

        <label htmlFor="dept">Daparts:</label>
        <br />
        <input type="datetime-local" id="dept" name="departs" value={today} />
        <br />
        <br />

        <input
          type="checkbox"
          id="shipIsBroken"
          name="shipIsBroken"
          value="shipIsBroken"
        ></input>
        <label htmlFor="shipIsBroken">Ship Is Broken</label>
        <br></br>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
    )
}

export default New; 
