import React from "react";
import "../assets/estyle/components/Header.css";
import Logo from "../components/Logo";
import Buscador from "../components/Buscador";
import { Link } from "react-router-dom";

function Header() {
	const [setTextValue, setEfectiveValue] = React.useState("");
	return (
		<div className="header">
			<Logo />

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
