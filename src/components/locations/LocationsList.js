import React from 'react'
import { LocationCard} from "./LocationCard"
import './Locations.css'

export const LocationsList = () => {
	return (
		<>
		<h1>Locations List</h1>
		<LocationCard />
		<LocationCard />
		<LocationCard />
		</>
	)
}