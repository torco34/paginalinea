import React from "react";
// import "../assets/estyle/components/Register.css";
import { Link } from "react-router-dom";
const Register = () => {
	return (
		<div>
			<section className="register">
				<section className="register__container">
					<h2>Regístrate</h2>
					<form className="register__container--form">
						<input
							className="input"
							type="text"
							placeholder="Nombre"
						/>
						<input
							className="input"
							type="text"
							placeholder="Correo"
						/>
						<input
							className="input"
							type="password"
							placeholder="Contraseña"
						/>
						<button className="button">Registrarme</button>
					</form>
					<Link to="/register">registrase</Link>
				</section>
			</section>
		</div>
	);
};
export default Register;
