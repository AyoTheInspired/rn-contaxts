import {
	REGISTER_FAILURE,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
} from "../../constants/actionTypes";

const authReducer = (state, { type, payload }) => {
	switch (type) {
		case REGISTER_LOADING:
			return {
				...state,
				loading: true,
			};

		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				data: payload,
			};

		case REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				error: payload,
			};

		default:
			return state;
	}
};

export default authReducer;
