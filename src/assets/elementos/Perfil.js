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
	top 30px;
    cursor: pointer;
	img {
		border-radius: 50%;
		width: 31%;
		colo: red;
		height: 9vh;
		z-index: 90;
	}
`;
const Parrafo = styled.p`
	display: flex;
	width: 13rem;

	height: 13vh;
	padding 5px;
	p {
	    position: relative;
		left: 3vh;
		font-size: 15px;
	}
`;

const GrupoIconos = styled.div`
	position: relative;
	top: -11vh;
	width: 170px;
    border-top: 1px solid #fff;
	border-radius: 4px;
	left: 12vh;
	height: 17vh;
	cursor: pointer;
	display: none;
	background: ${colores.black};
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
	font-size: 15px;
	z-index: 90;
	left: 4vh;
	margin-top: 3px;
`;
const IconFaUser = styled(FontAwesomeIcon)`
	position: relative;
	width: 4rem;
	height: 4vh;
	padding 1px 2px ;
	font-size: 17px;
	
`;
const MusicaPer = styled.p`
	position: absolute;
	left: 13vh;
	// text-align: center;
	margin-top: -80px;
	font-size: 12px;
	width: 200px;
	// border: solid 1px #fff;
`;

export {
	GrupoPerfil,
	Parrafo,
	GrupoIconos,
	IconAngleDown,
	IconFaUser,
	MusicaPer,
};
