import React, { useState } from "react";
import "../assets/estyle/components/Contenedor.css";

import Header from "../components/Header";
import mujer from "../assets/img/mujer.jpeg";
function Contenedor() {
	return (
		<div className="contenedor">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
				expedita nam, hic modi tenetur harum ipsam animi cumque iure
				maxime ex, ratione, recusandae. Molestiae repellendus sunt,
				aperiam officiis, eum reiciendis.
			</p>
			<img src={mujer} alt="" />
		</div>
	);
}
export default Contenedor;
