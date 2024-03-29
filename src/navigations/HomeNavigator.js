import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screens/Contacts";
import {
	CONTACT_DETAIL,
	CONTACT_LIST,
	CREATE_CONTACT,
	SETTINGS,
} from "../constants/routeNames";
import CreateContact from "../screens/CreateContact";
import Settings from "../screens/Settings";
import ContactDetails from "../screens/ContactDetails";

function HomeNavigator() {
	const HomeStack = createStackNavigator();

	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
			<HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
			<HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
			<HomeStack.Screen name={SETTINGS} component={Settings} />
		</HomeStack.Navigator>
	);
}

export default HomeNavigator;
