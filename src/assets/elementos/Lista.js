import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	white: "#E6F5FF",
	purple: "#834C69",
};
const GrupoLista = styled.div`
	position: relative;
	height: 30rem;
	padding: px;
	width: 20%;
	font-size: 11px;
	cursor: pointer;

	p {
		position: relative;
		left: 40px;
		color: ${colores.white};
	}
	div {
		border-left: 4px solid ${colores.purple};
		border-color: rgba(111, 111, 111, 0.2) transparent transparent;
	}
	div:hover {
		border-left: 4px solid ${colores.purple};
	}
	h6 {
		font-size: 15px;
		padding: 20px;
	}
	a {
		text-decoration: none;
		list-style: none;
	}
`;
const StyleIcono = styled(FontAwesomeIcon)`
	position: absolute;
	margin-top: -30px;
	left: 22px;

	color: ${colores.white};
`;
const Linea = styled.div``;

export { GrupoLista, StyleIcono, Linea };
