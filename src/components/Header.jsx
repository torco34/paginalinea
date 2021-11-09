import React from "react";
import "../assets/estyle/components/Header.css";
import LogoApp from "../components/LogoApp";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";

function Header(props) {
	const [setTextValue, setEfectiveValue] = React.useState("");
	// const buscadorTodos = [];

	return (
		<div className="header">
			<LogoApp />

			<SearchInput
				setTextValue={setTextValue}
				setEfectiveValue={setEfectiveValue}
			/>
			<Link className="linkInicioSesion" to="/login">
				iniciar sesion
			</Link>
		</div>
	);
}

export default Header;
