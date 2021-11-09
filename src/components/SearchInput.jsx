import React from "react";
import { IconoSearch, GrupoInput, Input } from "../assets/elementos/Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import "../assets/estyle/components/Buscador.css";

const SearchInput = ({ setTextValue, setEfectiveValue }) => {
	const searchMusica = (event) => {
		console.log(event.target.value);
		setEfectiveValue(event.target.value);
	};

	return (
		<>
			<form action="wd" className="form">
				<GrupoInput>
					<Input
						type="text"
						placeholder=" Search"
						value={setTextValue}
						onChange={searchMusica}
					/>
					<IconoSearch icon={faSearch} />
				</GrupoInput>
			</form>
		</>
	);
};
export default SearchInput;
