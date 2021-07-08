import React from 'react'
import { LocationCard } from './locations/LocationCard'
import './Home.css'

export const Home = () => {
	return(
		<>
		<section className="locations_card">
		<h2>Kandy Korner</h2>

		<h3> Locations</h3>
		<article className="locations">
			<LocationCard />
			<LocationCard />
			<LocationCard />
		</article>
		</section>
		</>
	)
}