import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const PracticeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome to Duck Dale!</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const LoginScreen = () => {
	const [name, setName] = useState("");
	return (
		<View style={styles.container}>
			<Text>Register</Text>
			<TextInput
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter name"
			/>
			<TextInput title="Username" placeholder="Enter username" />
			<TextInput
				title="Password"
				secureTextEntry={true}
				placeholder="Enter password"
			/>
			<TextInput
				title="Confirm password"
				secureTextEntry={true}
				placeholder="Confirm password"
			/>
			<Button title="Submit" />
		</View>
	);
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Practice" component={PracticeScreen} />
			<Tab.Screen name="Login" component={LoginScreen} />
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
