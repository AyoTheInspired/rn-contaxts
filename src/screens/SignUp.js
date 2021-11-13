import React, { useState } from "react";
import RegisterComponent from "../components/Register/RegisterComponent";

function Register() {
	const [form, setForm] = useState({});

	const [errors, setErrors] = useState({});

	const onChange = ({ name, value }) => {
		setForm({ ...form, [name]: value });

		if (value !== "") {
			if (name === "password") {
				if (value.length < 6) {
					setErrors({
						...errors,
						[name]: "Password should be at least 6 characters",
					});
				} else {
					setErrors({ ...errors, [name]: null });
				}
			} else {
				setErrors({ ...errors, [name]: null });
			}
		}

		if (name === "email") {
			if (!value.includes("@")) {
				setErrors({ ...errors, [name]: "Email is invalid" });
			}
		} else {
			setErrors({ ...errors, [name]: "This field is required" });
		}
	};

	const onSubmit = () => {
		console.log("Form >>> ", form);

		if (!form.userName) {
			setErrors((prev) => {
				return { ...prev, userName: "Please enter a Username" };
			});
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
	};

	return (
		<RegisterComponent
			form={form}
			errors={errors}
			onSubmit={onSubmit}
			onChange={onChange}
		/>
	);
}

export default Register;
