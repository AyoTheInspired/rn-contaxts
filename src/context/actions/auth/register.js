import {
	REGISTER_FAILURE,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptors";

export default ({
		email,
		password,
		userName,
		firstName: first_name,
		lastName: last_name,
	}) =>
	(dispatch) => {
		dispatch({
			type: REGISTER_LOADING,
		});
		axiosInstance
			.post("/auth/register", {
				email,
				password,
				userName,
				first_name,
				last_name,
			})
			.then((res) => {
				console.log("res", res);

				dispatch({
					type: REGISTER_SUCCESS,
					paylod: res.data,
				});
			})
			.catch((err) => {
				console.log("err", err);
				dispatch({
					type: REGISTER_FAILURE,
					payload: err.response
						? err.response.data
						: { error: "Something went wrong" },
				});
			});
	};
