import PageHeader from "../header/pageheader"

function PageEdit() {
  return (
    <>
    <PageHeader PageNumber={1}/>
     <h1>New Flight</h1>
    <div className="container">
      <div className="htmlForm-group mb-3">
        <label htmlFor="Number" className="htmlForm-label">flight number</label>
        <div><input type="text" className="htmlForm-control" id="number"placeholder="???"/></div>
      </div>
      <div className="htmlForm-group mb-3">
        <label htmlFor="Airline name" className="htmlForm-label">Airline name</label>
        <div><input type="text" className="htmlForm-control" id="number"placeholder="???"/></div> 
      </div>
      <div className="htmlForm-group mb-3">
        <label htmlFor="source" className="htmlForm-label">source</label>
        <div><input type="text" className="htmlForm-control" id="number" placeholder="???"/></div> 
      </div>
      <div className="htmlForm-group mb-3">
        <label htmlFor="destination" className="htmlForm-label">Destination</label>
        <div><input type="text" className="htmlForm-control" id="number" placeholder="???"/></div> 
      </div>
      <div className="htmlForm-group mb-3">
        <label htmlFor="destination" className="htmlForm-label">capacity</label>
       <div><input type="text" className="htmlForm-control" id="number" placeholder="???"/></div> 
      </div>
      <div className="htmlForm-group mb-3">
        <label htmlFor="price" className="htmlForm-label">ticket price</label>
        <div><input type="text" className="htmlForm-control" id="number" placeholder="???"/></div>
      </div>
      <button className="btn btn-success">submit</button>
      <a href ="/flights/list/" className="btn btn-warning">go back</a>
    </div>
    </>
  )
}
export default PageEdit