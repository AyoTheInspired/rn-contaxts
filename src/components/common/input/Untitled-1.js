// import React from "react";
// import { View, Text } from "react-native";
// import Container from "../common/container/Container";
// import Button from "../common/CustomButton/Button";
// import Input from "../common/Input/Input";

// const LoginComponent = () => {
// 	const [value, onChangeText] = useState("");

// 	return (
// 		<Container>
// 			<Input
// 				label="Username"
// 				onChangeText={(inputText) => onChangeText(inputText)}
// 				value={value}
// 				// error={"This field is required"}
// 			/>

// 			<Input
// 				label="Password"
// 				onChangeText={(inputText) => onChangeText(inputText)}
// 				value={value}
// 				icon={<Text>HIDE</Text>}
// 				iconPosition="right"
// 			/>

// 			<Button title="Submit" primary loading={true} disabled={true} />
// 		</Container>
// 	);
// };

// export default LoginComponent;

/////////////////////////////////////////////////////////////

// const onChange = ({ name, value }) => {
// 	setForm({ ...form, [name]: value });

// 	if (value !== "") {
// 		if (name === "password") {
// 			if (value.length < 6) {
// 				setErrors((prev) => {
// 					return { ...prev, [name]: "This field needs min 6 characters" };
// 				});
// 			} else {
// 				setErrors((prev) => {
// 					return { ...prev, [name]: null };
// 				});
// 			}
// 		} else {
// 			setErrors((prev) => {
// 				return { ...prev, [name]: null };
// 			});
// 		}
// 	} else {
// 		setErrors((prev) => {
// 			return { ...prev, [name]: "This field is required" };
// 		});
// 	}
// };
