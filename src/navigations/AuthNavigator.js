import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

function AuthNavigator() {
	const AuthStack = createStackNavigator();

	return (
		<AuthStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
			<AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
		</AuthStack.Navigator>
	);
}

export default AuthNavigator;
