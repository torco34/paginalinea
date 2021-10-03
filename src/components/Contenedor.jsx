import React, { useState } from "react";
import "../assets/estyle/components/Contenedor.css";

import Header from "../components/Header";
import mujer from "../assets/img/mujer.jpeg";
function Contenedor() {
	return (
		<div className="contenedor">
			<div>
				<Header />
			</div>
			<img src={mujer} alt="" />
		</div>
	);
}
export default Contenedor;
