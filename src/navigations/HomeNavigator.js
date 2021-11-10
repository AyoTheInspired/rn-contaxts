import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

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
		<HomeStack.Navigator initialRouteName="Contacts">
			<HomeStack.Screen name="Contact" component={Contacts} />
			<HomeStack.Screen name="Contact Detail" component={ContactDetails} />
			<HomeStack.Screen name="Create Contact" component={CreateContact} />
			<HomeStack.Screen name="Settings" component={Settings} />
		</HomeStack.Navigator>
	);
}

export default HomeNavigator;
