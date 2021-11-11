import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
};

const Logo = styled.div`
	span {
		position: relative;
		list-style: none;
		color: ${colores.white};
		font-size: 18px;
		left: 10px;
	}
`;
const GrupoLogo = styled.span`
	// border: solid 2px red;

	// background: ${colores.purple};
`;
const IconoMusic = styled(FontAwesomeIcon)`
	background: ${colores.purple};
	width: 4rem;
	height: 4vh;
	padding 2px 4px ;
	font-size: 20px;
	border-radius: 4px;
	
`;

export { Logo, GrupoLogo, IconoMusic };
