import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import "../assets/estyle/components/Link.css";
import Register from "../containers/Register";
// import NotFund from "../containers/NotFund";
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</Switch>
		</BrowserRouter>
	);
};
export default App;
