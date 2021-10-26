import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Buscador = ({ setTextValue, setEfectiveValue }) => {
	const buscarMusica = (event) => {
		console.log(event.target.value);
		setEfectiveValue(event.target.value);
	};

	return (
		<div>
			<form action="wd" className="bg-light text-dark mt-4 ">
				<input
					type="text"
					className="rounded text-dark  "
					value={setTextValue}
					onChange={buscarMusica}
				/>
				<FontAwesomeIcon icon={faSearch} />
			</form>
			<p>{setTextValue}</p>
		</div>
	);
};
export default Buscador;
