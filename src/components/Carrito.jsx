import React from "react";

class Carrito extends React.Component {
	state = { form: {} };

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<div className="text-center card">
				<h1 className="bg-dark text-light">carrito</h1>
				<h2>Torcoroma</h2>
				<h3>Arias</h3>
			</div>
		);
	}
}

export default Carrito;
