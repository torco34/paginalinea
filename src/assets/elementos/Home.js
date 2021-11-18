import styled from "styled-components";

const colores = {
	black: "#33313B",
	blue: "#3C4F65",
	purple: "#834C69",
	white: "#E6F5FF",
};
const ContaineHome = styled.div`
	display: grid;
	grid-template-column: 1fr;
	justify-content: center;
	gap: 20px;
	width: 100%;
	height: 50vh;
	// position: relative;
	// left: 100vh;
	border: solid 2px red;
	div {
		// grid-template-column: 1fr;
		justify-content: center;
		// border: solid 2px red;
	}
`;
export { ContaineHome };
