import React from "react";
import "../assets/estyle/components/Generos.css";
import Buscador from "./Buscador";
function Generos() {
	return (
		<div className="Generos">
			<p>
				Encuentra el genero de tu gusto aqui en tu PORTAL DE MUSICA
				<Buscador />
			</p>
		</div>
	);
}

export default Generos;
