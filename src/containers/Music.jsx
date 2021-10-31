import React from "react";
import MusicList from "../components/MusicList";
import MusicItem from "../components/MusicItem";
import "../assets/estyle/components/Music.css";
const todoMusic = [
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
	{ text: "Natanael Anselmo ", completed: false },
	{ text: "Alejandro Fernando", completed: false },
	{ text: "Dua Lipa", completed: false },
];
const Music = () => {
	return (
		<>
			<div className="contenedor">
				<MusicList>
					{todoMusic.map((todo) => (
						<MusicItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
						/>
					))}
				</MusicList>
			</div>
		</>
	);
};
export default Music;
