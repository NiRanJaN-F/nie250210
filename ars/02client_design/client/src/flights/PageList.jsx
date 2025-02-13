import PageHeader from "../header/pageheader"

function PageList() {
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
    <tr>
      <th scope="row">AI 845</th>
      <td>Air India</td>
      <td>Mumbai</td>
      <td>Abu Dhabi</td>
      <td>
        <a href= "/flights/edit/102345870" className="btn btn-warning">edit price</a>
        <button className="btn btn-danger">delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">6E 151</th>
      <td>indigo</td>
      <td>Hyderbad</td>
      <td>Bangalore</td>
      <td>
        <a href= "/flights/edit/102345870" className="btn btn-warning">edit price</a>
        <button className="btn btn-danger">delete</button>
      </td>
    </tr>
  </tbody>
</table> 
</div> 
    </>
  )
}
export default PageList