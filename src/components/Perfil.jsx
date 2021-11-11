import React from "react";
import {
	GrupoPerfil,
	Parrafo,
	GrupoIconos,
	IconAngleDown,
	IconFaUser,
} from "../assets/elementos/Perfil";
import sacha from "../assets/img/images.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faUser,
	faInbox,
	faCog,
} from "@fortawesome/free-solid-svg-icons";

const Perfil = () => {
	const incono = () => {
		alert("hola");
	};
	return (
		<>
			<GrupoPerfil>
				<Parrafo>
					<img src={sacha} alt="" />
					<p>Sacha Fines</p>
					<IconAngleDown onClick={incono} icon={faAngleDown} />
				</Parrafo>
				<GrupoIconos>
					<div>
						<IconFaUser icon={faUser} />
						<p>Perfil</p>
					</div>
					<div>
						<IconFaUser icon={faInbox} />
						<p>Inbox</p>
					</div>
					<div>
						<IconFaUser icon={faCog} />
						<p>Configuracion</p>
					</div>
				</GrupoIconos>
			</GrupoPerfil>
		</>
	);
};

export default Perfil;
