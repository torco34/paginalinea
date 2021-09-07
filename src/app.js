import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Contenedor from "./components/Contenedor";
// import BadgesNew from "./bages/BadgesNew";
// import NotFound from "./bages/NotFound";

import "./index.css";

function App() {
	return (
		<div>
			<Header />
			<Contenedor />
		</div>

		// <BrowserRouter>
		// 	<Leyout>
		// 		<Switch>
		// 			<Route exact path="/bages" component={BadgesForm} />
		// 			<Route exact path="/bages/new" component={BadgesNew} />
		// 			<Route component={NotFound} />
		// 		</Switch>
		// 	</Leyout>
		// </BrowserRouter>
	);
}

export default App;
