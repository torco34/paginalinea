import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
import "../assets/estyle/components/Link.css";
import Register from "../containers/Register";
import Rick from "../containers/Rick";
import NotFun from "../containers/NotFun";
import Layout from "../components/Layout";
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/rick" component={Rick} />
					<Route component={NotFun} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};
export default App;
