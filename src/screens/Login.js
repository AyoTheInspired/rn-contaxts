import React, { useContext, useState } from "react";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import { GlobalContext } from "../context/Provider";
import loginUser from "../context/actions/auth/loginUser";

function Login() {
	const [form, setForm] = useState({});
	const {
		authDispatch,
		authState: { error, loading, data },
	} = useContext(GlobalContext);

	const onChange = ({ name, value }) => {
		setForm({ ...form, [name]: value });
	};

	const onSubmit = () => {
		if (form.username && form.password) {
			loginUser(form)(authDispatch);
		}
	};

	return (
		<LoginComponent
			form={form}
			onSubmit={onSubmit}
			onChange={onChange}
			error={error}
			loading={loading}
		/>
	);
}

export default Login;
