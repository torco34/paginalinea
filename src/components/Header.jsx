import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../assets/estyle/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<div className="">
			<Navbar
				comprar="COMPRAR "
				linea="EN LINEA"
				formulario="Iniciar Sesion"
			/>
			<div className="">
				<div className="row  ">
					<div className="col-md-2  cajaPadre">
						<Link to="/Bages/new" className="btn btn-dark ">
							<FontAwesomeIcon icon={faAlignJustify} />
						</Link>
						{/*	<div>
						
							<button className="btn btn-dark  ">
								
							</button>
						</div>*/}
						<div className="lista_navbar">
							<ul>
								<li>
									<a className="active " href="/">
										Home
									</a>
								</li>
								<li>
									<a className="" href="/">
										Blusas
									</a>
								</li>
								<li>
									<a className="" href="/">
										Vestido
									</a>
								</li>
								<li>
									<a className=" " href="/">
										Zapatos
									</a>
								</li>
								<li>
									<a href="/">Camiza</a>
								</li>
								<li>
									<a href="/">Bolsos</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-10  listaDeInfomacion">
						<ul>
							<li>
								<FontAwesomeIcon icon={faTruck} />
								<a href="/">Envíos a nivel nacional</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faPhoneAlt} />
								<a href="/">Solicita tu cambio en línea</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faCalendarDay} />
								<a href="/">60 días de garantía</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
