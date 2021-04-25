import React from "react";
import Header from "../components/Header";
const Leyout = (props) => {
	// const children = props.children
	return (
		<React.Fragment>
			<Header />
			{props.children}
		</React.Fragment>
	);
};

export default Leyout;
