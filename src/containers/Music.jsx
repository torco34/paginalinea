import React from "react";
import MusicList from "../components/MusicList";
import MusicItem from "../components/MusicItem";
import MusicContad from "../components/MusicContad";
import SearchInput from "../components/SearchInput";
import "../assets/estyle/components/Music.css";
const todoMusicFilter = [
	{ text: "Romeo Santos", completed: true },
	{ text: "Ricardo Argona", completed: false },
	{ text: "Marc Antoni ", completed: false },
	{ text: "Enrique  iglesia", completed: false },
	{ text: "Maluma  ", completed: false },
	{ text: "Ed Sheerid", completed: false },
	{ text: "Bad Bunny", completed: false },
	{ text: "Luis Miguel", completed: false },
	{ text: "Frenco De Evita", completed: false },
	{ text: "Nick Jam", completed: false },
	{ text: "Shakyra", completed: false },
	{ text: "Natanael Anselmo ", completed: true },
	{ text: "Alejandro Fernando", completed: false },
	{ text: "Dua Lipa", completed: false },
];
const Music = (props) => {
	const [todo, setTodos] = React.useState(todoMusicFilter);

	const [setTextValue, setEfectiveValue] = React.useState([]);

	const completedTodo = todo.filter((todos) => !!todos.completed).length;
	const totalTodo = todo.length;
	let buscadorVacio = [];

	if (!setTextValue.length >= 1) {
		buscadorVacio = todo;
	} else {
		buscadorVacio = todo.filter((todos) => {
			const todosText = todos.text.toLowerCase();

			const buscadorText = setTextValue.toLowerCase();

			return todosText.includes(buscadorText);
		});
	}
	return (
		<>
			{" "}
			<div className="contenedor">
				<MusicList>
					{buscadorVacio.map((todo) => (
						<MusicItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
						/>
					))}
				</MusicList>
				<SearchInput
					setTextValue={setTextValue}
					setEfectiveValue={setEfectiveValue}
				/>

				<MusicContad
					total={completedTodo}
					completed={totalTodo}
					otroText={buscadorVacio}
				/>
			</div>
		</>
	);
};
export default Music;
