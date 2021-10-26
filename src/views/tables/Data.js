import React, { useContext } from "react";
import Context from "./store/Context";
//import routes from "routes.js";


import OverComp from "./OverCompani";
import OverInves from "./OverInves";
import OverTeck from "./OverTeck";
import OverDigital from "./OverDigital";
import OverTalent from "./OverTalent";
import ReactTables from "./ReactTables"
import GridInves from "./GridInves"

const Data = () => {
	const context = useContext(Context);
	console.log (context.state.menuSelected)
	console.log (context.state.menuSelectedOld)
	if (context.state.menuSelected===2) {
		if (context.state.menuSelectedOld===6) {
			return <GridInves />
		}
		else {
			console.log ("entro al else de 2do if")
			return <OverInves />
		}
	}
	else {
		switch (context.state.menuSelected) {
		
			case 1:
				return <OverComp />
			case 2:
				return <OverInves />
			case 3:
				return <OverTeck />
			case 4:
				return <OverDigital />
			case 5:
				return <OverTalent />
			case 6:
				return <ReactTables />
			default:
				return <div>Error en opción de menú</div>
		};
	}
};

export default Data;

/*
switch (context.state.menuSelected) {
		case 1:
			return <OverComp />
		case 2:
			return <OverInves />
		case 3:
			return <OverTeck />
		case 4:
			return <OverDigital />
		case 5:
			return <OverTalent />
		
		default:
			return <div>Error en opción de menú</div>
	};
*/