import React from "react";
import "../assets/estyle/components/Videos.css";

// import Navbar from "../components/Navbar";
function Video() {
	const [equipo, setEquipo] = React.useState([]);
	React.useEffect(() => {
		console.log(equipo, "Aqui va el []");
		console.log(obtenerDatos(), "Aqui api");
		obtenerDatos();
		console.log(obtenerDatos(), "informacion de la API prom");
	}, []);
	const obtenerDatos = async () => {
		const data = await fetch(
			" https://rickandmortyapi.com/api/character/?page=19"
		);
		const users = await data.json();
		console.log(users, "informcion de API");

		setEquipo(users);
	};
	return (
		<div className="videos">
			<div>
				<p>Nuestro</p>
				{/*<ul>
					{equipo.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>*/}
			</div>
		</div>
	);
}

export default Video;
