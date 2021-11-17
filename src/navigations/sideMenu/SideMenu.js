import React from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	Alert,
} from "react-native";
import Container from "../../components/common/container/Container";
import styles from "./styles";
import { SETTINGS } from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";

const SideMenu = ({ navigation, authDispatch }) => {
	const handleLogout = () => {
		navigation.toggleDrawer();

		Alert.alert("Exiting", "Are you sure you want to Logout?", [
			{
				text: "Cancel",
				onPress: () => {},
			},

			{
				text: "OK",
				onPress: () => logoutUser()(authDispatch),
			},
		]);
	};

	const menuItems = [
		{
			id: 1,
			icon: <Text>T</Text>,
			name: "Settings",
			onPress: () => {
				navigation.navigate(SETTINGS);
			},
		},
		{
			id: 2,
			icon: <Text>T</Text>,
			name: "Logout",
			onPress: handleLogout,
		},
	];

	return (
		<SafeAreaView>
			<Container>
				<Image
					height={70}
					width={70}
					source={require("../../assets/images/logo.png")}
					style={styles.logoImage}
				/>

				<View style={{ paddingHorizontal: 40 }}>
					{menuItems.map(({ id, icon, name, onPress }) => (
						<TouchableOpacity onPress={onPress} key={id} style={styles.item}>
							{icon}
							<Text style={styles.itemText}>{name}</Text>
						</TouchableOpacity>
					))}
				</View>
			</Container>
		</SafeAreaView>
	);
};

export default SideMenu;
