import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavContainer = () => {
	const {
		authState: { isLoggedIn },
	} = useContext(GlobalContext);

	const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
	const [authLoaded, setAuthLoaded] = useState(false);

	const getUser = async () => {
		try {
			const user = await AsyncStorage.getItem("user");

			if (user) {
				setAuthLoaded(true);
				setIsAuthenticated(true);
			} else {
				setAuthLoaded(true);
				setIsAuthenticated(false);
			}
		} catch (error) {}
	};

	useEffect(() => {
		getUser();
	}, [isLoggedIn]);

	return authLoaded ? (
		<NavigationContainer>
			{isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	) : (
		<ActivityIndicator />
	);
};

export default AppNavContainer;
