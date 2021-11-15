import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import RegisterComponent from "../components/Register/RegisterComponent";
import { LOGIN } from "../constants/routeNames";
import register, { clearAuthState } from "../context/actions/auth/register";
import { GlobalContext } from "../context/Provider";

function Register() {
	const [form, setForm] = useState({});
	const { navigate } = useNavigation();
	const [errors, setErrors] = useState({});

	const {
		authDispatch,
		authState: { error, loading, data },
	} = useContext(GlobalContext);

	useEffect(() => {
		if (data) {
			navigate(LOGIN);
		}
	}, [data]);

	useFocusEffect(
		React.useCallback(() => {
			if (data || error) {
				clearAuthState()(authDispatch);
			}
		}, [data, error])
	);

	const onChange = ({ name, value }) => {
		setForm({ ...form, [name]: value });

		if (value !== "") {
			if (name === "password") {
				if (value.length < 2) {
					setErrors((prev) => {
						return {
							...prev,
							[name]: "This field requires a  minimum of 2 characters",
						};
					});
				} else {
					setErrors((prev) => {
						return { ...prev, [name]: null };
					});
				}
			} else {
				setErrors((prev) => {
					return { ...prev, [name]: null };
				});
			}
		} else {
			setErrors((prev) => {
				return { ...prev, [name]: "This field is required" };
			});
		}
	};

	const onSubmit = () => {
		if (!form.username) {
			setErrors({ ...errors, username: "Please enter your User Name" });
		}

		if (!form.firstName) {
			setErrors({ ...errors, firstName: "Please enter your First Name" });
		}

		if (!form.lastName) {
			setErrors((prev) => {
				return { ...prev, lastName: "Please enter your Last Name" };
			});
		}

		if (!form.email) {
			setErrors((prev) => {
				return { ...prev, email: "Please enter a valid email" };
			});
		}

		if (!form.password) {
			setErrors((prev) => {
				return { ...prev, password: "Please enter a password" };
			});
		}

		if (
			Object.values(form).length === 5 &&
			Object.values(form).every((item) => item.trim().length > 0) &&
			Object.values(errors).every((item) => !item)
		) {
			register(form)(authDispatch);
		}
	};

	return (
		<RegisterComponent
			form={form}
			errors={errors}
			onSubmit={onSubmit}
			onChange={onChange}
			error={error}
			loading={loading}
		/>
	);
}

export default Register;
