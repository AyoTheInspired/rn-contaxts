import {
	LOGIN_FAILURE,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ password, username }) =>
	(dispatch) => {
		dispatch({
			type: LOGIN_LOADING,
		});
		axiosInstance
			.post("/auth/login", {
				password,
				username,
			})
			.then((res) => {
				AsyncStorage.setItem("token", res.data.token);
				AsyncStorage.setItem("user", JSON.stringify(res.data.user));
				dispatch({
					type: LOGIN_SUCCESS,
					paylod: res.data,
				});
			})
			.catch((err) => {
				console.log("err", err);
				dispatch({
					type: LOGIN_FAILURE,
					payload: err.response
						? err.response.data
						: { error: "Something went wrong, please retry" },
				});
			});
	};
