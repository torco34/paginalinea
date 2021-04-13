import React from "react";

class Formulario extends React.Component {
	handleChange = (e) => {
		// 	console.log({ value: e.target.value });
		// };
		// handleClick = (e) => {
		// 	console.log("hola botocito");
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5 card">
						<h1>Nuevo Clientes</h1>
						<form className="">
							<div className="form-group">
								<label htmlFor=""> Nombre</label>
								<input
									onChange={this.handleChange}
									className="form-control"
									type="text"
									name="firstName"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Apellido</label>
								<input
									onChange={this.handleChange}
									className="form-control"
									type="text"
									name="firstSurname"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Email</label>
								<input
									onChange={this.handleChange}
									className="form-control"
									type="email"
									name="email"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Contrasena</label>
								<input
									onChange={this.handleChange}
									className="form-control"
									type="text"
									name="Contrasena"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="">Confima Contrasena</label>
								<input
									onChange={this.handleChange}
									className="form-control"
									type="text"
									name="confimaContrasena"
								/>
							</div>
							<div className="form-check mt-3">
								<input
									className="form-check-input"
									type="checkbox"
									name="política"
								/>
								<label>
									Acepto política y tratamiento de mis datos *
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									name="recibir"
								/>
								<label>Deseo recibir ofertas por e-mail</label>
							</div>
							<button
								type="button"
								onClick={this.handleClick}
								className="btn card"
							>
								Enviar
							</button>
						</form>
					</div>
					<div className="col-md-6"></div>
				</div>
			</div>
		);
	}
}

export default Formulario;
