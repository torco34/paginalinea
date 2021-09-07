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
						<Videos />
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
