import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>Allocations</Text>
			<Link href="/accounts">Accounts</Link>
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
