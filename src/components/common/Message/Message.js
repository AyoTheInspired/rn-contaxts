import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const Message = ({
	primary,
	danger,
	success,
	retry,
	retryFn,
	message,
	info,
	onDismiss,
}) => {
	const [userDismissed, setUserDismissed] = useState(false);

	const getBackgroundColor = () => {
		if (primary) {
			return colors.primary;
		}

		if (info) {
			return colors.secondary;
		}

		if (success) {
			return colors.success;
		}

		if (danger) {
			return colors.danger;
		}
	};

	return (
		<>
			{userDismissed ? null : (
				<TouchableOpacity
					style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							width: "100%",
						}}>
						<Text
							style={{
								color: colors.white,
							}}>
							{message}{" "}
						</Text>

						{retry && !typeof onDismiss === "function" && (
							<TouchableOpacity onPress={retryFn}>
								<Text
									style={{
										color: colors.white,
									}}>
									Retry
								</Text>
							</TouchableOpacity>
						)}

						{typeof onDismiss === "function" && (
							<TouchableOpacity
								onPress={() => {
									setUserDismissed(true);
									onDismiss();
								}}>
								<Text style={{ color: colors.white }}>X</Text>
							</TouchableOpacity>
						)}
					</View>
				</TouchableOpacity>
			)}
		</>
	);
};

export default Message;
