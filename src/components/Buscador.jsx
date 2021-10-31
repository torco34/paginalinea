import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../assets/estyle/components/Buscador.css";

const Buscador = ({ setTextValue, setEfectiveValue }) => {
	const buscarMusica = (event) => {
		console.log(event.target.value);
		setEfectiveValue(event.target.value);
	};

	return (
		<div>
			<form action="wd" className="form">
				<input
					type="text"
					className="input "
					value={setTextValue}
					onChange={buscarMusica}
				/>
				<FontAwesomeIcon className="inco" icon={faSearch} />
			</form>
			<p>{setTextValue}</p>
		</div>
	);
};
export default Buscador;
