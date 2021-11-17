import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { GlobalContext } from "../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavContainer = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
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
	}, []);

	const {
		authState: { isLoggedIn },
	} = useContext(GlobalContext);

	return authLoaded ? (
		<NavigationContainer>
			{isLoggedIn || isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	) : (
		<ActivityIndicator />
	);
};

export default AppNavContainer;
