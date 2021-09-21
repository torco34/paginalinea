import React from "react";
import "../assets/estyle/components/Videos.css";

// import Navbar from "../components/Navbar";
function Video() {
	const [equipo, setEquipo] = React.useState([]);
	React.useEffect(() => {
		console.log(obtenerDatos());
		obtenerDatos();
	}, []);
	const obtenerDatos = async () => {
		const data = await fetch(
			"https://rickandmortyapi.com/api/character/?page=19"
		);
		const users = await data.json();
		console.log(users);
		setEquipo(users);
	};
	return (
		<div className="videos">
			<div>
				<p>
					Bienvenido a qui podras encontrar toda clases de videos
					musicales
				</p>
				<ul>
					{/*	{equipo.map((item => (
						<li key="item.id">{item.name}</li>
					))}*/}
				</ul>
			</div>
		</div>
	);
}

export default Video;
