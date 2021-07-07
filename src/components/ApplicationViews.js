import React from 'react'
import {Route} from "react-router-dom"


export const ApplicationViews = () => {
	return(
		<>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
      <h1>Application Views</h1>
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      {/* <Route path="/animal">
        <AnimalCard />
      </Route>

      <Route path="/customer">
        <CustomerCard />
      </Route>

      <Route path="/employee">
        <EmployeeCard />
      </Route>

      <Route path="/location">
        <LocationCard />
      </Route> */}
    </>
	)
}