import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../common/container/Container";
import Button from "../common/CustomButton/Button";
import Input from "../common/Input/Input";
import { LOGIN } from "../../constants/routeNames";
import styles from "./styles";

const RegisterComponent = ({ form, errors, onSubmit, onChange }) => {
	const { navigate } = useNavigation();

	return (
		<Container>
			<Image
				source={require("../../assets/images/logo.png")}
				style={styles.logoImage}
			/>

			<View>
				<Text style={styles.title}>Welcome to Contaxts!</Text>
				<Text style={styles.subTitle}>Create a free account</Text>

				<View style={styles.form}>
					<Input
						label="Username"
						iconPosition="right"
						placeholder="Enter Username"
						onChangeText={(value) => {
							onChange({ name: "userName", value });
						}}
						error={errors.userName}
					/>

					<Input
						label="First Name"
						iconPosition="right"
						placeholder="Enter First Name"
						onChangeText={(value) => {
							onChange({ name: "firstName", value });
						}}
						error={errors.firstName}
					/>

					<Input
						label="Last Name"
						iconPosition="right"
						placeholder="Enter Last Name"
						onChangeText={(value) => {
							onChange({ name: "lastName", value });
						}}
						error={errors.lastName}
					/>

					<Input
						label="Email"
						iconPosition="right"
						placeholder="you@domain.com"
						onChangeText={(value) => {
							onChange({ name: "email", value });
						}}
						error={errors.email}
					/>

					<Input
						label="Password"
						icon={<Text>Show</Text>}
						iconPosition="right"
						placeholder="Enter Password"
						secureTextEntry={true}
						onChangeText={(value) => {
							onChange({ name: "password", value });
						}}
						error={errors.password}
					/>

					<Button title="Submit" onPress={onSubmit} primary />

					<View style={styles.createSection}>
						<Text style={styles.infoText}>Already have an account?</Text>
						<TouchableOpacity onPress={() => navigate(LOGIN)}>
							<Text style={styles.linkBtn}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Container>
	);
};

export default RegisterComponent;
