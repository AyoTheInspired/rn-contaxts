/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavContainer from "./src/navigations";

const App = () => {
	return <AppNavContainer> </AppNavContainer>;
};

export default App;
