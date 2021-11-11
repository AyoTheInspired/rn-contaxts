import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
	logoImage: {
		height: 150,
		width: 150,
		alignSelf: "center",
		marginTop: 20,
	},

	title: {
		fontSize: 23,
		textAlign: "center",
		paddingVertical: 10,
		fontWeight: "500",
	},

	subTitle: {
		fontSize: 18,
		textAlign: "center",
		paddingTop: 8,
		fontWeight: "500",
	},

	form: {
		paddingTop: 20,
	},

	createSection: {
		flexDirection: "row",
		marginTop: 10,
	},

	infoText: {
		fontSize: 17,
	},

	linkBtn: {
		paddingLeft: 10,
		fontSize: 16,
		color: colors.primary,
		// textDecorationLine: "underline",
	},
});
