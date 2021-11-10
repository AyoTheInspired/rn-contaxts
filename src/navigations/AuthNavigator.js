import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

function AuthNavigator() {
	const AuthStack = createNativeStackNavigator();

	return (
		<AuthStack.Navigator initialRouteName={LOGIN}>
			<AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
			<AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
		</AuthStack.Navigator>
	);
}

export default AuthNavigator;
