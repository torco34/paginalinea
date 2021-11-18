import React, { useState, useEffect } from "react";
import { ContaineHome } from "../assets/elementos/Home";
import Header from "../components/Header";

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
			<ContaineHome>
				<div>
					{" "}
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
				</div>
			</ContaineHome>
		</>
	);
};
export default Home;
