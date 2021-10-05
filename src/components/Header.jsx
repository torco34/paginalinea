import React from "react";
import "../assets/estyle/components/Header.css";
import Logo from "../components/Logo";
import Buscador from "../components/Buscador";
import { Link } from "react-router-dom";

function Header() {
	// const children = props.children; COMBIAR HEADER TOTALMENT
	return (
		<div className="header">
			<Logo />

			<Buscador />
			<Link to="/login">
				<h4>iniciar sesion</h4>
			</Link>
		</div>
	);
}

export default Header;
