import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeNames";
import SideMenu from "./sideMenu/SideMenu";
import { GlobalContext } from "../context/Provider";

function DrawerNavigator() {
	const { authDispatch } = useContext(GlobalContext);

	const Drawer = createDrawerNavigator();

	const getDrawerContent = (navigation, authDispatch) => {
		return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
	};

	return (
		<Drawer.Navigator
			drawerType="back"
			drawerContent={({ navigation }) =>
				getDrawerContent(navigation, authDispatch)
			}>
			<Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;
