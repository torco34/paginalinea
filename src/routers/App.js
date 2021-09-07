import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParam,
} from "react-router-dom";
// import Home from "../containers/Home";
// import Header from "../components/Header";

import Contenedor from "../components/Contenedor";
import Header from "../components/Header";

const App = () => {
	return (
		<Router>
			<div className="">
				<Header />
				ESCUCHAR MUSICA 2021 ONLINE GRATIS
				<div className="">
					<Link to="/">Home</Link>
					<Link to="/video">Video</Link>
					<Link to="/genero">Generos</Link>
				</div>
				<Switch>
					<Route path="/video">
						<p>Aqui solo videos de mi musica</p>
					</Route>
					<Route path="/genero">solo generos</Route>

					<Route path="/">
						<Contenedor />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
export default App;
