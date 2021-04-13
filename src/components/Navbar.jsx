import React from "react";
import "../assets/Navbar.css";
import lupa from "../assets/img/lupa.jpg";
import carrito from "../assets/img/carritos.png";

class Navbar extends React.Component {
	render() {
		return (
			<div className="container card componente_navbar">
				<div className="row">
					<div className="col-md-2 ">
						<span className="parrafo_logo ">
							<em className="mt-3">
								{this.props.comprar}
								<p className="text-light ">
									{this.props.linea}
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
						<a href="/">{this.props.formulario}</a>
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

export default Navbar;
