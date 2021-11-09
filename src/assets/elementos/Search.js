import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
	gray: "#a0a5a9",
};

const GrupoInput = styled.div`
	position: relative;
	left: 110px;
	z-index: 90;
	width: 30%;
`;
const Input = styled.input`
	width: 100%;
	background: ${colores.white};
	border-radius: 5px;
	height: 30px;
	line-height: 45px;
	padding: 0 10px 0 10px;
	transition: 0.3s ease all;

	border: 3px solid transparent;
	&:focus {
		outline: none;
		box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.6);
	}
`;
const IconoSearch = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	color: ${colores.gray};
`;

export { IconoSearch, GrupoInput, Input };
