import React from "react";

import "../assets/estyle/components/LogoBuscaCarriSesi.css";
import lupa from "../assets/img/lupa.jpg";
import carrito from "../assets/img/carritos.png";
class LogoBuscaCarriSesi extends React.Component {
	render() {
		return (
			<div className="container  componente_navbar">
				<div className="row">
					<div className="col-md-2 ">
						<span className="parrafo_logo ">
							<em className="mt-3">
								{this.props.logoPart1}
								<p className="text-light ">
									{this.props.logoPart2}
								</p>
							</em>
						</span>
					</div>
					<div className="col-md-8 imagenLupaInput ">
						<form className="">
							<input
								type="search"
								className=""
								placeholder="Buscar..."
							/>
							<img src={lupa} alt="" />
						</form>
					</div>
					<div className="col-md-2  sectionHref">
						<a href="/">{this.props.sesion}</a>
						<div className="carrito">
							<a href="/">
								<img src={carrito} alt=" carito" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LogoBuscaCarriSesi;
