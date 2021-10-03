import React from "react";
import twitterIcon from "../assets/img/twitter-icon.png";
import googleIcon from "../assets/img/google-icon.png";
import "../assets/estyle/components/Login.css";
const Login = () => {
	return (
		<div className="login">
			<div className="login__container ">
				<h2>Inicia sesión</h2>

				<form className="login__container--form">
					<input className="input" type="text" placeholder="Correo" />
					<input
						className="input"
						type="password"
						placeholder="Contraseña"
					/>
					<button className="button">Iniciar sesión</button>
					<div className="login__container--remember-me">
						<label>
							<input
								type="checkbox"
								id="cbox1"
								value="first_checkbox"
							/>
						</label>

						<a href="/">Olvidé mi contraseña</a>
					</div>
				</form>
				<div className="login__container--social-media">
					<div>
						<img src={googleIcon} /> Inicia sesión con Google
					</div>
					<div>
						<img src={twitterIcon} /> Inicia sesión con Twitter
					</div>
				</div>
				<p className="login__container--register">
					No tienes ninguna cuenta <a href="#">Regístrate</a>
				</p>
			</div>
		</div>
	);
};
export default Login;
