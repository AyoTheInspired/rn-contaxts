import React, { createContext, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import authState from "./initialStates/authState";
import contactsState from "./initialStates/contactsState";
import contactsReducer from "./reducers/contactsReducer";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
	const [auth, authDispatch] = useReducer(authReducer, authState);
	const [contacts, contactsDispatch] = useReducer(
		contactsReducer,
		contactsState
	);

	return (
		<GlobalContext.Provider
			value={{
				auth,
				contacts,
				authDispatch,
				contactsDispatch,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
