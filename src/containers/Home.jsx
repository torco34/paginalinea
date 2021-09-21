import React from "react";
import Contenedor from "../components/Contenedor";

const Home = () => {
	const [numero, setNumero] = React.useState(0);
	console.log(`${numero}`);
	return (
		<div>
			<Contenedor />
		</div>
	);
};
export default Home;
