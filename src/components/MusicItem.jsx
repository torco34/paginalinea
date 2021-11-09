import React from "react";
import "../assets/estyle/components/MusicItem.css";
const MusicItem = (props) => {
	const completed = () => {
		console.log("soy el parrafo");
	};
	return (
		<>
			<li className="TodoItem">
				<span
					className={`Icon Icon-check ${
						props.completed && "Icon-check--active"
					}`}
				>
					√
				</span>
				<p
					className={`TodoItem-p ${
						props.completed &&
						"TodoItem-p--completed  Icon-check--active"
					}`}
					onClick={completed}
				>
					{props.text}
				</p>
				<span className="Icon Icon-delete">X</span>
			</li>
		</>
	);
};
export default MusicItem;
