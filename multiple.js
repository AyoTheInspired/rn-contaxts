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


// Picking the dispatch function where it's needed

		const {
			authDispatch,
			authState: { error, loading, data },
		} = useContext(GlobalContext);


				register(form)(authDispatch);



				// Attaching and listening for the dispatch function

				import {
	REGISTER_FAILURE,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptors";

export default ({
		email,
		password,
		username,
		firstName: first_name,
		lastName: last_name,
	}) =>
	(dispatch) => {
		dispatch({
			type: REGISTER_LOADING,
		});
		axiosInstance
			.post("auth/register", {
				email,
				password,
				username,
				first_name,
				last_name,
			})
			.then((res) => {
				dispatch({
					type: REGISTER_SUCCESS,
					paylod: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: REGISTER_FAILURE,
					payload: err.response
						? err.response.data
						: { error: "Something went wrong" },
				});
			});
	};
