import React, { useContext, useEffect, useState } from "react";
import RegisterComponent from "../components/Register/RegisterComponent";
import register from "../context/actions/auth/register";
import { GlobalContext } from "../context/Provider";

function Register() {
	const [form, setForm] = useState({});

	const [errors, setErrors] = useState({});

	const {
		authDispatch,
		authState: { error, loading, data },
	} = useContext(GlobalContext);

	const onChange = ({ name, value }) => {
		setForm({ ...form, [name]: value });

		if (value !== "") {
			if (name === "password") {
				if (value.length < 3) {
					setErrors({
						...errors,
						[name]: "Password should be at least 3 characters",
					});
				} else {
					setErrors({ ...errors, [name]: null });
				}
			} else {
				setErrors({ ...errors, [name]: null });
			}
		} else {
			setErrors({ ...errors, [name]: "This field is required" });
		}
	};

	const onSubmit = () => {
		if (!form.userName) {
			setErrors({ ...errors, userName: "Please enter a Username" });
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
