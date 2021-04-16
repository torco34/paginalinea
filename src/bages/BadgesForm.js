import React from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import Carrito from "../components/Carrito";

class BadgesForm extends React.Component {
	render() {
		return (
			<div className="card">
				<Header />
				<div className="row">
					<div className="col-6">
						<Formulario />
					</div>
					<div className="col-6">
						<Carrito />
					</div>
				</div>
			</div>
		);
	}
}
export default BadgesForm;
