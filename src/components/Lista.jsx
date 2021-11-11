import React from "react";
// import "../assets/estyle/components/Lista.css";
import Perfil from "./Perfil";
import { Link } from "react-router-dom";
const Lista = () => {
	return (
		<div className="borderBlanco">
			<Perfil />{" "}
			<Link to="/">
				<h5>inicio</h5>
			</Link>
			<Link to="/Music">
				<h5>Music</h5>
			</Link>
			<Link to="/discover">
				<h5>Discover</h5>
			</Link>
		</div>
	);
};
export default Lista;
