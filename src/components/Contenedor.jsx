import React from "react";
import "../assets/estyle/components/Contenedor.css";
import Buscador from "./Buscador";
// import Navbar from "../components/Navbar";
function Contenedo() {
	// const children = props.children;
	return (
		<div>
			<div className="contenedor">
				<h2>EL PORTA DE LA MUSICA</h2>
				<Buscador />
			</div>
		</div>
	);
}

export default Contenedo;
