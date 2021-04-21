import React from "react";

class Carrito extends React.Component {
	render() {
		return (
			<div className="text-center card">
				<h1 className="bg-dark text-light">carrito</h1>
				<h2>{this.props.nombre}</h2>
				<h3>Arias</h3>
			</div>
		);
	}
}

export default Carrito;
