import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../screens/Contacts";
import { Text, View } from "react-native";
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
	const HomeStack = createNativeStackNavigator();

	return (
		<HomeStack.Navigator initialRouteName={CONTACT_LIST}>
			<HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
			<HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
			<HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
			<HomeStack.Screen name={SETTINGS} component={Settings} />
		</HomeStack.Navigator>
	);
}

export default HomeNavigator;
