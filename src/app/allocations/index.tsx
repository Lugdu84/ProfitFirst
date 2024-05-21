import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Allocations' }} />
			<Text>Allocations</Text>
			<Link href="/allocations/new">Add allocation</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
