import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import {
	CONTACT_DETAIL,
	CONTACT_LIST,
	CREATE_CONTACT,
	SETTINGS,
} from "../constants/routeNames";

const Contacts = () => {
	return (
		<View>
			<Text>Hello from Contacts</Text>
		</View>
	);
};

const ContactDetails = () => {
	return (
		<View>
			<Text>Hello from ContactDetails</Text>
		</View>
	);
};

const CreateContact = () => {
	return (
		<View>
			<Text>Hello from CreateContact</Text>
		</View>
	);
};
const Settings = () => {
	return (
		<View>
			<Text>Hello from Settings</Text>
		</View>
	);
};

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
