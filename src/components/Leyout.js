import React from "react";
import Header from "../components/Header";
const Leyout = (props) => {
	// const children = props.children
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
};

export default Leyout;
