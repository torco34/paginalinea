import React from "react";
import "../assets/estyle/components/Header.css";
import LogoApp from "../components/LogoApp";
import Buscador from "../components/Buscador";
import { Link } from "react-router-dom";

function Header(props) {
	const [setTextValue, setEfectiveValue] = React.useState("");
	// const buscadorTodos = [];

	return (
		<div className="header">
			<LogoApp />

			<Buscador
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
