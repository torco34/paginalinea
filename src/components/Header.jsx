import React from "react";
import "../assets/estyle/components/Header.css";
// import Navbar from "../components/Navbar";
function Header() {
	// const children = props.children;
	return (
		<div>
			<div className="header">
				<span>mi cancion</span>
				<div className="lista">
					<ul>
						<li>
							<a href="#">NOVEDADE</a>
						</li>{" "}
						<li>
							<a href="#">LISTA</a>
						</li>{" "}
						<li>
							<a href="#">BLOC</a>
						</li>{" "}
						<li>
							<a href="#">INICIAR SECTION</a>
						</li>{" "}
						<li>
							<a href="#">REGISTARCE</a>
						</li>{" "}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
