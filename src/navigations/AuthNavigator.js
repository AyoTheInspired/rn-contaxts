import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Login = () => {
	return (
		<View>
			<Text>Hello from Login</Text>
		</View>
	);
};

const SignUp = () => {
	return (
		<View>
			<Text>Hello from ContactDetails</Text>
		</View>
	);
};

function AuthNavigator() {
	const AuthStack = createNativeStackNavigator();

	return (
		<AuthStack.Navigator initialRouteName="Login">
			<AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
			<AuthStack.Screen name="Register" component={SignUp}></AuthStack.Screen>
		</AuthStack.Navigator>
	);
}

export default AuthNavigator;
