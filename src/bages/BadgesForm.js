import React from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import Carrito from "../components/Carrito";

class BadgesForm extends React.Component {
	state = {
		form: {
			firstName: "",
			firstSurname: "",
			email: "",
			contrasena: "",
			confimaContrasena: "",
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};
	render() {
		return (
			<div className="card">
				<Header />
				<div className="row">
					<div className="col-6">
						<Carrito
							firstName={this.state.form.nombre}
							FirstSurname={this.state.form.FirstSurname}
						/>
					</div>
					<div className="col-6">
						<Formulario
							onChange={this.handleChange}
							formValues={this.state.form}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default BadgesForm;
