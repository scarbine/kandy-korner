import React from 'react'
import { LocationCard } from './locations/LocationCard'

export const Home = () => {
	return(
		<>
		<h2>Kandy Korner</h2>
		
		<h2> Locations</h2>
		<article className="locations">
			<LocationCard />
			<LocationCard />
			<LocationCard />
		</article>
		</>
	)
}