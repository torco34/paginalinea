import React from "react";
import "../assets/estyle/components/Generos.css";

function Generos() {
	const [conocer, setConocer] = React.useState("");
	const noSaber = "Aun no, falta poco ):";
	const respuesta = () => {
		setConocer(conocer + noSaber);
	};

	return (
		<div className="Generos">
			<p>Encuentra el genero de tu gusto aqui en tu PORTAL DE MUSICA</p>

			<div>
				{" "}
				{conocer}
				<h2 className="btn btn-info" onClick={respuesta}>
					Soy developer? <p className="bg-primary"></p>
					{conocer}
				</h2>
				{conocer}
			</div>
			{conocer}
		</div>
	);
}

export default Generos;
