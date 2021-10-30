import React, { useState, useEffect } from "react";
// import Contenedor from "../components/Contenedor";
import "../assets/estyle/components/Home.css";

const Home = () => {
	const URL = "https://jsonplaceholder.typicode.com/posts";
	const [todos, setTodos] = useState();
	const consumirApi = async () => {
		const response = await fetch(URL);
		console.log(response.status);
		const responseJSON = await response.json();
		setTodos(responseJSON);
		console.log(responseJSON);
	};
	useEffect(() => {
		consumirApi();
	}, []);
	return (
		<>
			<div>
				<ul>
					{!todos
						? "cargando...."
						: todos.map((todo, index) => {
								return (
									<li key={index}>
										{todo.body}
										{todo.title}
									</li>
								);
						  })}
				</ul>
			</div>
		</>
	);
};
export default Home;
