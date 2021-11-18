import React, { useState, useEffect } from "react";
import { ContaineHome } from "../assets/elementos/Home";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
const Home = (tod) => {
	return (
		<>
			<ContaineHome>
				<div>
					<SearchInput />
				</div>
			</ContaineHome>
		</>
	);
};
export default Home;
