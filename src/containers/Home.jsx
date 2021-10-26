import React, { useState, useEffect } from "react";
import Contenedor from "../components/Contenedor";

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
								return <li>{todo.title}</li>;
						  })}
				</ul>
			</div>

			<Contenedor cuerpo="Hola soy el cuerpo de la  esta pagina en pros si me ves en" />
		</>
	);
};
export default Home;
