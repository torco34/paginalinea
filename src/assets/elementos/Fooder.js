import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
	gray: "#a0a5a9",
};

const ContainerFooder = styled.div`
	display: flex;
	grid-template-column: 1fr;
	justify-content: center;
	border: solid 2px red;

	margin-top: 24%;
`;

export { ContainerFooder };
