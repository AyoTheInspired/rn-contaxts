import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../common/container/Container";
import Button from "../common/CustomButton/Button";
import Input from "../common/Input/Input";
import styles from "./styles";
import { REGISTER } from "../../constants/routeNames";
import Message from "../common/Message/Message";

const LoginComponent = ({ form, onSubmit, error, onChange, loading }) => {
	const { navigate } = useNavigation();

	return (
		<Container>
			<Image
				source={require("../../assets/images/logo.png")}
				style={styles.logoImage}
			/>

			<View>
				<Text style={styles.title}>Welcome to Contaxts!</Text>
				<Text style={styles.subTitle}>Please Login Here</Text>
				<View style={styles.form}>
					{/* {error && !error.error && (
						<Message
							onDismiss={() => {}}
							danger
							message="Invalid Credentials"
						/>
					)} */}
					{error?.error && <Message message={error.error} danger onDismiss />}
					<Input
						label="Username"
						iconPosition="right"
						placeholder="Enter Username"
						onChangeText={(value) => {
							onChange({ name: "username", value });
						}}
					/>

					<Input
						label="Password"
						icon={<Text>Show</Text>}
						iconPosition="right"
						placeholder="Enter Password"
						onChangeText={(value) => {
							onChange({ name: "password", value });
						}}
						secureTextEntry={true}
					/>

					<Button onPress={onSubmit} title="Submit" primary />

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
