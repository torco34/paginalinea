import React, { useState } from "react";
import "../assets/estyle/components/Contenedor.css";
// import Buscador from "./Buscador";
// import Navbar from "../components/Navbar";
function Contenedo() {
	// const children = props.children;
	const [numero, setNumero] = useState(0);
	const aumentar = () => {
		setNumero(numero + 1);
	};
	return (
		<div className="contenedor">
			<div>
				<p>
					Bienveido a mi sitio web aqui encontrara todo tipo de musica
				</p>
				<h2>EL PORTA DE LA MUSICA: {numero}</h2>
				<button onClick={aumentar}>sumar</button>
			</div>
		</div>
	);
}

export default Contenedo;
