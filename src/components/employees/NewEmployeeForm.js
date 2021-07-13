// import React, {useContext, useState}from "react"
// import { EmployeeContext } from "./EmployeeProvider"
// import { useHistory } from "react-router-dom"

// export const NewEmployeeForm = () => {
// 	const {addEmployee} = useContext(EmployeeContext)

// 	const [employee, setEmployee] = useState({})

// 	const {employeeId} = useParams();
	
	
// 	useEffect(() => {
// 		console.log("Employee List: useEffect - getEmployees")
// 		getEmployees()
// 	}, [])

// 	const handleSaveEmployee = () => {
// 		addEmployee({
// 			name: employee.name,
// 			locationId: parseInt(employee.locationId),
// 			isManager: employee.isManager,
// 			isFullTime: employee.isFullTime,
// 			hourlyRate: employee.hourlyRate
// 	})




// 	return (
// 		<>
// 		<form className="employeeForm">
// 		  <h2 className="employeeForm__title">New Employee</h2>
// 		  <fieldset>
// 		    <div className="form-group">
// 		      <label htmlFor="employeeName">Employee name: </label>
// 		      <input type="text" id="employeeName" name="name" required autoFocus className="form-control"
// 		      placeholder="Animal name"
// 		      onChange={handleControlledInputChange}
// 		      defaultValue={employee.name}/>
// 		    </div>
// 		  </fieldset>
// 		  <fieldset>
// 		    <div className="form-group">
// 		      <label htmlFor="location">Assign to location: </label>
// 		      <select value={employee.locationId} name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
// 			<option value="0">Select a location</option>
// 			{employee.locations?.map(l => (
// 			  <option key={l.id} value={l.id}>
// 			    {l.name}
// 			  </option>
// 			))}
// 		      </select>
// 		    </div>
// 		  </fieldset>
// 		  <button className="btn btn-primary"
//           disabled={isLoading}
//           onClick={event => {
//             event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//             handleSaveEmployee()
//           }}>
//         {employeeId ? <>Save Employee</> : <>Add Employee</>}</button>

// 		  </form>
// 		  </>)



// }