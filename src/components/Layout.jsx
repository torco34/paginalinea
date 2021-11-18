import React from "react";

import Footer from "./Footer";
import Header from "./Header";
// import "../assets/estyle/components/Footer.css";
const Layout = ({ children }) => {
	return (
		<div className="footer">
			<Header />
			{children}
			<Footer />
		</div>
	);
};
export default Layout;
