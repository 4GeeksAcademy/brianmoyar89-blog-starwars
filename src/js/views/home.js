import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { idCard } = useParams();
	const { store, actions } = useContext(Context);

	console.log(store.favorites);
	return (
		<div className="container mt-4">
			<h1>Characters</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.people.map((person, index) => {
					let uid = person.url.split('/').filter(Boolean).pop();
					
					return <div className="text-center mx-auto mb-5" key={uid}>
						<Card name={person.name} gender={person.gender} hairColor={person.hair_color} eyeColor={person.eye_color} uid={uid} category="people"/>
					</div>
				})}
			</div>
			<h1>Planets</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.planets.map((planet, index) => {
					let uid = planet.url.split('/').filter(Boolean).pop();
					return <div className="text-center mx-auto mb-5" key={uid}>
						<Card name={planet.name} population={planet.population} terrain={planet.terrain} climate={planet.climate} uid={uid}  category="planets"/>
					</div>
				})}
			</div>
			<h1>Vehicles</h1>
			<div className="text-center d-flex overflow-scroll">
				{store.vehicles.map((vehicle, index) => {
					let uid = vehicle.url.split('/').filter(Boolean).pop();
					return <div className="text-center mx-auto mb-5" key={uid} >
						<Card name={vehicle.name} vehicleClass={vehicle.vehicle_class} cargoCapacity={vehicle.cargo_capacity} maxAtmospheringSpeed={vehicle.max_atmosphering_speed} uid={uid} category="vehicles"/>
					</div>
				})}
			</div>
		</div>
	)
};
