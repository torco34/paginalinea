import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BadgesForm from "./bages/BadgesForm";
import BadgesNew from "./bages/BadgesNew";

import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/bages" component={BadgesForm} />
				<Route exact path="/bages/new" component={BadgesNew} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
