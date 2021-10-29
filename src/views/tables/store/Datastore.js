import React, { useReducer } from "react";
import Context from "./Context";

const defaultValue = {
	empresaSelected: 1,
	menuSelected: 6 ,
	menuSelectedOld : 41,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_EMPRESA":
			return { ...state, empresaSelected: action.payload };
		case "SET_MENU":
			return { ...state, menuSelected: action.payload };
		case "SET_MENU_OLD":		
			return { ...state, menuSelectedOld: action.payload };
		default:
			return state;
	}
};

const Datastore = ({children}) => {

	const [state, dispatch] = useReducer(reducer, defaultValue);
	
	return(
		<Context.Provider value={{state, dispatch}}>
			{ children }
		</Context.Provider>
	);
};

export default Datastore;