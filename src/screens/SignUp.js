import React, { useState } from "react";
import RegisterComponent from "../components/Register/RegisterComponent";

function Register() {
	const [form, setForm] = useState({});

	const [errors, setErrors] = useState({});

	const onChange = ({ name, value }) => {
		setForm({ ...form, [name]: value });
	};

	const onSubmit = () => {
		console.log("Form >>> ", form);
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
