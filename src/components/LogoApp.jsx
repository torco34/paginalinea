import React from "react";
import { Logo, GrupoLogo, IconoMusic } from "../assets/elementos/Logo";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const LogoApp = () => {
	return (
		<>
			<Logo action="">
				<GrupoLogo>
					<IconoMusic icon={faMusic} />
					<span>NEM</span>
					<span>USICAS</span>
				</GrupoLogo>
			</Logo>
		</>
	);
};
export default LogoApp;
