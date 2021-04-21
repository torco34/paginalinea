import React from "react";

class Carrito extends React.Component {
	render() {
		return (
			<div className="text-center card">
				<h1 className="bg-dark text-light">carrito</h1>
				<h2 className="text-primary card">
					Nombre: {this.props.firstName}
				</h2>
				<h3 className="text-info card">
					Apellido: {this.props.firstSurname}
				</h3>
				<h3 className="text-danger card">Email: {this.props.email}</h3>
				<h3 className="text-warning card">
					Contrasena: {this.props.contrasena}
				</h3>
				<h3 className="text-success card">
					confimaContrasena: {this.props.confimaContrasena}
				</h3>
			</div>
		);
	}
}

export default Carrito;
