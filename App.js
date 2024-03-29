import "react-native-gesture-handler";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import AppNavContainer from "./src/navigations";
import GlobalProvider from "./src/context/Provider";

const App = () => {
	return (
		<GlobalProvider>
			<AppNavContainer />
		</GlobalProvider>
	);
};

export default App;
