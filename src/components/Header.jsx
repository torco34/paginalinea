import React from "react";
import "../assets/estyle/components/Header.css";
import Logo from "../components/Logo";
import Buscador from "../components/Buscador";

function Header() {
	// const children = props.children; COMBIAR HEADER TOTALMENT
	return (
		<div className="header">
			<Logo />

			<Buscador />

			<div>iniciar section</div>
		</div>
	);
}

export default Header;
