import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Lista from "./Lista";
import "../assets/estyle/components/Footer.css";
const Layout = ({ children }) => {
	return (
		<div className="footer">
			<Header />
			<Lista />
			{children}
			<Footer />
		</div>
	);
};
export default Layout;
