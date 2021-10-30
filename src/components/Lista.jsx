import React from "react";
import "../assets/estyle/components/Lista.css";
import { Link } from "react-router-dom";
const Lista = () => {
	return (
		<div className="borderBlanco">
			{" "}
			<Link to="/">
				<h5>inicio</h5>
			</Link>
			<Link to="/rick">
				<h5>Rick</h5>
			</Link>
		</div>
	);
};
export default Lista;
