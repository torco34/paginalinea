import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
};
const CuerpoHeader = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 30%;
	background: ${colores.blue};
	display: grid;
	justify-content: center;
	grid-template-column: 1fr;
	grid-row: 4;

	@media (max-width: 800px) {
		grid-template-column: 1fr;
	}
`;
export { CuerpoHeader };
