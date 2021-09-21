import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParam,
} from "react-router-dom";
// import Home from "../containers/Home";
import Videos from "../containers/Videos";

import Contenedor from "../components/Contenedor";
import Header from "../components/Header";
import Generos from "../components/Generos";
import "../assets/estyle/components/Link.css";
const App = () => {
	return (
		<Router>
			<div className="">
				<Header />
				ESCUCHAR MUSICA 2021 ONLINE GRATIS
				<div className="link">
					<Link to="/">Home</Link>
					<Link to="/video">Video</Link>
					<Link to="/genero">Generos</Link>
				</div>
				<Switch>
					<Route path="/video">
						<Videos />
					</Route>
					<Route path="/genero">
						<Generos />
					</Route>
					<Route path="/">
						<Contenedor />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
export default App;
