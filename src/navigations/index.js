import React from "react";
import { StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

const AppNavContainer = () => {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
};

export default AppNavContainer;
