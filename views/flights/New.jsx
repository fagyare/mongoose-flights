import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function New(props) {

  return (
    <DefaultLayout>
      <div>
        <h1>New flights Log</h1>
        <form action="/flight" method="POST">
          <label htmlFor="air">Airline:</label>
          <br />
          <input type="text" id="air" name="airline" />
          <br />
          <br />        <label htmlFor="fno">Flight No:</label>
          <br />
          <input type="text" id="fno" name="flightNo" />
          <br />
          <br />        <label htmlFor="dept">Departs:</label>
          <br />
          <input type="datetime-local" id="dept" name="departs" defaultValue={props.departsDate} />
          <br />
          <br />
          <label>Airport: </label>
          <select name='airport'>
            <option>AUS</option>
            <option>DAL</option>
            <option>LAX</option>
            <option>SAN</option>
            <option>SEA</option>
          </select>
          <br />

          <br />

          <button>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default New; 