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
          {/* <br />        <label htmlFor="dept">Departs:</label> */}
          <br />
          {/* <input type="datetime-local" id="dept" name="departs" defaultValue={props.departsDate} /> */}
         

          <label>Airport: </label>


          <select id="airport" name='airport'>
            <option selected >Select Airport</option>
            <option value='AUS' >AUS</option>
            <option value='DAL' >DAL</option>
            <option value='LAX' >LAX</option>
            <option value='SAN' > SAN</option>
            <option value='SEA' > SEA</option>
          </select>
          <br />

          <br />

          <label htmlFor="dprts">Departs:</label><br />
          <input type="datetime-local" id="dprts" name="departs" defaultValue={props.departsDate} /><br /><br />

          <button className="btn-destination">SUBMIT</button>
        </form>
        <br /><br />
        <form className="form-index" action="/flight">
          <button className="btn-index">Back</button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default New; 