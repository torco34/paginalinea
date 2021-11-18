import React from "react";
import { GrupoLista, StyleIcono, Linea } from "../assets/elementos/Lista";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMusic,
	faChartBar,
	faNewspaper,
	faUserFriends,
	faHeart,
	faHistory,
	faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
// import Perfil from "./Perfil";
import { Link } from "react-router-dom";
const Lista = () => {
	return (
		<>
			<GrupoLista>
				<h6>Explore Music</h6>
				<Linea>
					<Link to="/">
						<p>Discover</p>
						<StyleIcono icon={faMusic} />
					</Link>
				</Linea>
				<Linea>
					<Link to="/Music">
						<p>Charts</p>
						<StyleIcono icon={faChartBar} />
					</Link>
				</Linea>
				<Linea>
					<Link to="/discover">
						<p>News</p>
						<StyleIcono icon={faNewspaper} />
					</Link>
				</Linea>
				<Linea>
					{" "}
					<Link to="/discover">
						<p>Artists</p>
						<StyleIcono icon={faUserFriends} />
					</Link>
				</Linea>
				<h6>Your Music</h6>
				<Linea>
					{" "}
					<Link to="/discover">
						<p>Favorite</p>
						<StyleIcono icon={faHeart} />
					</Link>
				</Linea>
				<Linea>
					{" "}
					<Link to="/discover">
						<p>History</p>
						<StyleIcono icon={faHistory} />
					</Link>
				</Linea>
				<Linea>
					<Link to="/discover">
						<p>Playlists</p>
						<StyleIcono icon={faFileVideo} />
					</Link>
				</Linea>{" "}
			</GrupoLista>
		</>
	);
};
export default Lista;
