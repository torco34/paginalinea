import React from "react";
import "../assets/estyle/components/Menu.css";

class Menu extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-md-3 lista_navbar">
						<ul>
							<li>
								<a className="active " href="/">
									este es haderHome
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
			</React.Fragment>
		);
	}
}

export default Menu;
