import React from "react";
import "../assets/estyle/components/Discover.css";
import men from "../assets/img/descarga (1).jpeg";
import musica from "../assets/img/descarga.jpeg";
import azul from "../assets/img/azul.jpg";
const Discover = () => {
	return (
		<>
			<div className="containerDiscover">
				<div>mundo</div>
				<div className="containerDos">
					<div>
						<img src={men} alt="" />
						<h3>Top 50l</h3>
						<p></p>
					</div>
					<div>
						{" "}
						<img src={musica} alt="" />
						<h3>viral</h3>
					</div>
					<div>
						<img src={azul} alt="" />
						<h3>Trading</h3>
						<p></p>
					</div>

					<button className="boton">ver</button>
				</div>
			</div>
		</>
	);
};
export default Discover;
