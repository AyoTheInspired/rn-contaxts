import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Container from "../components/common/container/Container";
import Input from "../components/common/input/Input";

function Login() {
	const [value, onChangeText] = useState("");

	return (
		<Container>
			<Input
				label="Username"
				onChangeText={(inputText) => onChangeText(inputText)}
				value={value}
				// error={"This field is required"}
			/>

			<Input
				label="Password"
				onChangeText={(inputText) => onChangeText(inputText)}
				value={value}
				icon={<Text>HIDE</Text>}
				iconPosition="right"
			/>
		</Container>
	);
}

export default Login;
