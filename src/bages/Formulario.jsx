import React from "react";

class Formulario extends React.Component {
	handleChange = (e) => {
		console.log({ value: e.target.value });
	};
	handleClick = (e) => {
		console.log("hola botocito");
	};
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h1>Nuevo Clientes</h1>
						<form>
							<div className="form-group">
								<label htmlFor="">Primer Nombre</label>
								<input
									onChange={this.handleChange}
									className="form-control"
									type="text"
									name="firstName"
								/>
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
