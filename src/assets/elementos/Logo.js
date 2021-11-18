import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
};

const Logo = styled.div`
	// border: solid 1px red;
	font-family: "Roboto", sans-serif;
	height: 50px;
	margin-top: 7vh;
	span {
		position: relative;
		list-style: none;
		color: ${colores.white};
		font-size: 20px;
		left: 10px;
	}
`;
const GrupoLogo = styled.span``;
const IconoMusic = styled(FontAwesomeIcon)`
	background: ${colores.purple};
	width: 10vh;
	height: 4vh;
	padding 5px ;
	font-size: 25px;
	border-radius: 4px;
	right: 10px;
	
`;

export { Logo, GrupoLogo, IconoMusic };
