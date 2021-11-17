import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
	wrapper: {
		height: 40,
		borderRadius: 4,
		paddingHorizontal: 8,
		paddingVertical: 5,
		marginVertical: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	loaderSection: {
		flexDirection: "row",
	},
});
