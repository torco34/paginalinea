import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Buscador = () => {
	const [setTextValue, setEfectiveValue] = React.useState("");
	const buscarMusica = (event) => {
		console.log(event.target.value);
		setEfectiveValue(event.target.value);
	};

	return (
		<div>
			<form action="" className="bg-light text-dark mt-4 ">
				<input
					type="text"
					className="rounded text-dark  "
					onChange={buscarMusica}
				/>
				<FontAwesomeIcon icon={faSearch} />
			</form>
			<p>{setTextValue}</p>
		</div>
	);
};
export default Buscador;
