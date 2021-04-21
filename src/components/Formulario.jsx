import React from "react";
import Carrito from "../components/Carrito";
class Formulario extends React.Component {
	// state = {};

	handleChange = (e) => {
		// console.log({ name: e.target.name, value: e.target.value });
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleClick = (e) => {
		console.log("estamos listo");
	};

	handleSubmit = (e) => {
		// e.preventDefault();
		console.log("este es un sumit");
		console.log(this.state);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 card">
						<h1>Nuevo Clientes</h1>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor=""> Nombre</label>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="firstName"
									value={this.props.formValues.FirstName}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Apellido</label>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="firstSurname"
									value={this.props.formValues.FirstSurname}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Email</label>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="email"
									value={this.props.formValues.email}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Contrasena</label>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="contrasena"
									value={this.props.formValues.contrasena}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Confima Contrasena</label>
								<input
									onChange={this.props.onChange}
									className="form-control"
									type="text"
									name="confimaContrasena"
									value={
										this.props.formValues.confimaContrasena
									}
								/>
							</div>

							<button
								type=""
								onClick={this.handleClick}
								className="btn card"
							>
								Enviar
							</button>
						</form>
					</div>
					{/*<div className="col-md-6"></div>*/}
				</div>
			</div>
		);
	}
}

export default Formulario;
