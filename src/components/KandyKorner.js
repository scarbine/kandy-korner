import React from 'react'
// import { Route } from 'react-router-dom'
import { NavBar } from './nav/NavBar'
import { ApplicationViews } from "./ApplicationViews"

export const KandyKorner = ()=> {
	return(
		<>
		<h1>Kandy Korner</h1>
		<NavBar />
		<ApplicationViews />

		</>
	)
}