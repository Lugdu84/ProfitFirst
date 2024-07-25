import AllocationsList from '@/components/AllocationsList';
import { mySync } from '@/db/sync';
import { Feather } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Allocations',
					headerRight: () => (
						<Feather
							name="refresh-cw"
							size={20}
							onPress={mySync}
						/>
					),
				}}
			/>
			<Link
				href="/allocations/new"
				style={styles.button}>
				Add allocation
			</Link>
			<AllocationsList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		backgroundColor: 'green',
		color: 'white',
		textAlign: 'center',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		overflow: 'hidden',
	},
});
