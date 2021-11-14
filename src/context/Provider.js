import React, { createContext, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import authInitialState from "./initialStates/authState";
import contactsState from "./initialStates/contactsState";
import contactsReducer from "./reducers/contactsReducer";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);
	const [contacts, contactsDispatch] = useReducer(
		contactsReducer,
		contactsState
	);

	return (
		<GlobalContext.Provider
			value={{
				authState,
				contacts,
				authDispatch,
				contactsDispatch,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
