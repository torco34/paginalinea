import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
};
const GrupoPerfil = styled.div`
	position: relative;
	width: 20%;

	img {
		border-radius: 50%;
		width: 30%;
		colo: red;
		height: 10vh;
		z-index: 90;
	}
`;
const Parrafo = styled.p`
	display: flex;
	width: 13rem;
	font-size: 14px;
	height: 13vh;
	padding 5px;

	p {
	position: relative;
		left: 3vh;
	}
`;

const GrupoIconos = styled.div`
	position: relative;
	top: -11vh;
	width: 70%;
	left: 13vh;
	height: 17vh;
	cursor: pointer;
	display: none;
	background: ${colores.blue};
	p {
		position: absolute;
		margin-top: -25px;
		left: 30px;
		font-size: 12px;
	}
	div{
		padding 3px;
	}

	div:hover {
		background: ${colores.purple};
		
	}
`;

const IconAngleDown = styled(FontAwesomeIcon)`
	position: relative;
	list-style: none;
	font-size: 20px;
	z-index: 90;
	left: 6vh;
	margin-top: 3px;
	cursor: pointer;
`;
const IconFaUser = styled(FontAwesomeIcon)`
	position: relative;
	width: 4rem;
	height: 4vh;
	padding 1px 2px ;
		font-size: 17px;
	
`;

export { GrupoPerfil, Parrafo, GrupoIconos, IconAngleDown, IconFaUser };
