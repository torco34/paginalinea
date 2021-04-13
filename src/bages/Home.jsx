import React from "react";

import "../assets/estyle/components/Home.css";
import blusa from "../assets/img/blusa.jpg";
import corazon from "../assets/img/corazon.jpg";
import ralla from "../assets/img/ralla.jpg";
class Home extends React.Component {
	render() {
		return (
			<div className="container secionCuerpo ">
				<div className="row ">
					<div className="col-md-12">
						<h2 className="text-center">
							DISENO INNOVADOR Y PRECIO RAZONABLES{" "}
						</h2>
					</div>
					<div className="col-md-4  ">
						<div className="card ">
							<img
								src={blusa}
								className="card-img-top"
								alt="rosada"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Ribete festoneado
								</h5>
								<p className="card-text">
									una blusa confeccionada con tejidos de
									poliéster y elastano mangas cortas y su
									cuello redondo.
									<br />
									<span className="text-danger">
										$ 50.000
									</span>
								</p>

								<a href="/" className="btn boton">
									Comprar
								</a>
							</div>
						</div>
					</div>

					<div className="col-md-4 ">
						<div className="card">
							<img
								src={corazon}
								className="card-img-top"
								alt="rosada"
							/>
							<div className="card-body">
								<h5 className="card-title"> Blusa de pepas</h5>
								<p className="card-text">
									Una prenda veraniega que combina estilo y
									comodidad animate por la tuya. No espere mas{" "}
									<br />
									<span className="text-danger">
										$ 30.000
									</span>
								</p>
								<a href="/" className="btn btn-dark">
									Comprar
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<img
								src={ralla}
								className="card-img-top"
								alt="rosada"
							/>
							<div className="card-body">
								<h5 className="card-title">Milk & Biscuits</h5>
								<p className="card-text">
									Inspiradas en los cuellos victorianos,
									incorporan los volantes en el escote.
									<br />
									<span className="text-danger">
										$ 30.000
									</span>
								</p>
								<a href="/" className="btn btn-dark">
									Comprar
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
