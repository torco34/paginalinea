import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Leyout from "./components/Leyout";
import BadgesForm from "./bages/BadgesForm";
import BadgesNew from "./bages/BadgesNew";
import NotFound from "./bages/NotFound";

import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<Leyout>
				<Switch>
					<Route exact path="/bages" component={BadgesForm} />
					<Route exact path="/bages/new" component={BadgesNew} />
					<Route component={NotFound} />
				</Switch>
			</Leyout>
		</BrowserRouter>
	);
}

export default App;
