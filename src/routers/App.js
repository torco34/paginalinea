import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Login from "../containers/Login";
// import "../assets/estyle/components/Link.css";
import Register from "../containers/Register";
import Music from "../containers/Music";
// import index from "../containers/Index";
import Discover from "../containers/Discover";
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
					<Route exact path="/Music" component={Music} />
					<Route exact path="/Discover" component={Discover} />
					<Route component={NotFun} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};
export default App;
