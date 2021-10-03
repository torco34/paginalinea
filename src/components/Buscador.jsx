import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Buscador extends React.Component {
	render() {
		return (
			<div>
				<form action="" className="bg-light text-dark mt-4 ">
					<input type="text" className="rounded text-dark  " />
					<FontAwesomeIcon icon={faSearch} />
				</form>
			</div>
		);
	}
}
export default Buscador;
