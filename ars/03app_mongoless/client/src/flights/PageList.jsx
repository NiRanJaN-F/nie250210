
import { useState } from "react";
import PageHeader from "../header/pageheader"

function PageList() {
    const[flights, setFlights] = useState([{ id: "1010" , flightNumber: "AI 845", airlineName: "AirIndia", source: "Mumbai", destination: "Abu Dabi", price: 10000},
    { id: "1011" , flightNumber: "6E 151", airlineName: "Indigo", source: "Hyderabad", destination: "Bengaluru", price: 5000}
    ]);
  return (
    <>
    <PageHeader PageNumber={1}/>
      <h2>List of Flights</h2>
<div className = "container">
<table className="table table-primary table-stripped">
  <thead className="table-dark">
    <tr>
      <th scope="col">Flight Numbers</th>
      <th scope="col">Airline Name</th>
      <th scope="col">Source</th>
      <th scope="col">Destination</th>
      <th scope="col">edit/delete</th>
    </tr>
  </thead>
  <tbody>
  {flights.map((flight) => {
                            return (
                                <tr>
                                    <th scope="row">{flight.number}AI 845</th>
                                    <td>{flight.airway_name}</td>
                                    <td>{flight.source}</td>
                                    <td>{flight.destination}</td>
                                    <td>
                                        <a href="/flights/edit/{flihgt.id}" className="btn btn-warning">Edit Price</a>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
  </tbody>
</table> 
</div> 
    </>
  )
}
export default PageList