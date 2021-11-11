import React from "react";
import { View, Text } from "react-native";
import Container from "../common/container/Container";
import Button from "../common/CustomButton/Button";
import Input from "../common/Input/Input";

const LoginComponent = () => {
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

			<Button title="Submit" primary loading={true} disabled={true} />
		</Container>
	);
};

export default LoginComponent;
