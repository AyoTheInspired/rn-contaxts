import React, { useContext, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../common/container/Container";
import Button from "../common/CustomButton/Button";
import Input from "../common/Input/Input";
import styles from "./styles";
import { REGISTER } from "../../constants/routeNames";
import { GlobalContext } from "../../context/Provider";
import Message from "../common/Message/Message";

const LoginComponent = () => {
	const { navigate } = useNavigation();

	const {
		authDispatch,
		authState: { error, loading, data },
	} = useContext(GlobalContext);

	return (
		<Container>
			<Image
				source={require("../../assets/images/logo.png")}
				style={styles.logoImage}
			/>

			<View>
				<Text style={styles.title}>Welcome to Contaxts!</Text>
				<Text style={styles.subTitle}>Please Login Here</Text>

				<Message
					retry
					retryFn={() => {
						console.log("Retrying...");
					}}
					onDismiss={() => {}}
					message="Invalid Credentials"
					primary
				/>
				<Message message="Invalid Credentials" danger />
				<Message message="Invalid Credentials" primary />
				<Message message="Invalid Credentials" info />

				<View style={styles.form}>
					<Input
						label="Username"
						iconPosition="right"
						placeholder="Enter Username"
					/>
					<Input
						label="Password"
						icon={<Text>Show</Text>}
						iconPosition="right"
						placeholder="Enter Password"
						secureTextEntry={true}
					/>
					<Button title="Submit" primary />

					<View style={styles.createSection}>
						<Text style={styles.infoText}>Need a new account?</Text>
						<TouchableOpacity onPress={() => navigate(REGISTER)}>
							<Text style={styles.linkBtn}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Container>
	);
};

export default LoginComponent;
