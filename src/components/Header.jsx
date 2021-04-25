import React from "react";
import LogoBuscaCarriSesi from "./LogoBuscaCarriSesi";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import "../assets/estyle/components/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<div className=" container  cajaPadre ">
			<LogoBuscaCarriSesi
				logoPart1="COMPRAR "
				logoPart2="EN LINEA"
				sesion="Iniciar Sesion"
			/>

			<React.Fragment>
				<div className="row">
					<div className="col-md-2   ">
						<Link to="/Bages/new" className="btn btn-dark botones ">
							<FontAwesomeIcon icon={faAlignJustify} />
						</Link>
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
			</React.Fragment>
			<Menu />
		</div>
	);
};
export default Header;
