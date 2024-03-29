import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../common/container/Container";
import Button from "../common/CustomButton/Button";
import Input from "../common/Input/Input";
import { LOGIN } from "../../constants/routeNames";
import styles from "./styles";
import Message from "../common/Message/Message";

const RegisterComponent = ({
	form,
	errors,
	onSubmit,
	onChange,
	loading,
	error,
}) => {
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
					{error?.error && (
						<Message message={error.error} danger retry retryFn={() => {}} />
					)}

					<Input
						label="Username"
						iconPosition="right"
						placeholder="Enter Username"
						error={errors.username || error?.username?.[0]}
						onChangeText={(value) => {
							onChange({ name: "username", value });
						}}
					/>

					<Input
						label="First Name"
						iconPosition="right"
						placeholder="Enter First Name"
						onChangeText={(value) => {
							onChange({ name: "firstName", value });
						}}
						error={errors.firstName || error?.first_name?.[0]}
					/>

					<Input
						label="Last Name"
						iconPosition="right"
						placeholder="Enter Last Name"
						onChangeText={(value) => {
							onChange({ name: "lastName", value });
						}}
						error={errors.lastName || error?.last_name?.[0]}
					/>

					<Input
						label="Email"
						iconPosition="right"
						placeholder="you@domain.com"
						onChangeText={(value) => {
							onChange({ name: "email", value });
						}}
						error={errors.email || error?.email?.[0]}
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
						error={errors.password || error?.password?.[0]}
					/>

					<Button
						loading={loading}
						disabled={loading}
						title="Submit"
						onPress={onSubmit}
						primary
					/>

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
