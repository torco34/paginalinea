import React, { useState, useEffect } from "react";
// import Contenedor from "../components/Contenedor";

const Home = (tod) => {
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
			<ul className="homeUl">
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
		</>
	);
};
export default Home;
