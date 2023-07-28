import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const PracticeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome to Duck Dale!</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Practice" component={PracticeScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
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
