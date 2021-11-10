/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Text } from "react-native";
import AppNavContainer from "./src/navigations";
// import HomeNavigator from "./src/navigations/HomeNavigator";

const App = () => {
	return (
		<AppNavContainer>
			<Text
				style={{
					marginTop: 50,
					color: "green",
					fontSize: 89,
				}}>
				Hello from the App
			</Text>

			{/* <HomeNavigator /> */}
		</AppNavContainer>
	);
};

export default App;
