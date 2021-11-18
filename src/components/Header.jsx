import React from "react";
import { CuerpoHeader } from "../assets/elementos/Header";
import LogoApp from "../components/LogoApp";

import Perfil from "../components/Perfil";
import Lista from "../components/Lista";

function Header(props) {
	// const [setTextValue, setEfectiveValue] = React.useState("");
	// const buscadorTodos = [];

	return (
		<>
			<CuerpoHeader>
				<LogoApp />
				<Perfil />
				<Lista />
			</CuerpoHeader>
		</>
	);
}

export default Header;
