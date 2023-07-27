import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
	const [color, setColor] = useState("red");
	return (
		<View style={styles.container}>
			<Text>Welcome to Duck Dale!</Text>
			{/* <Button title="Hey Hannah" /> */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#abc",
		alignItems: "center",
		justifyContent: "center",
	},
});
