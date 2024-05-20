import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NewAllocationScreen() {
	return (
		<View>
			<Stack.Screen options={{ title: 'New allocation' }} />
			<Text>New allocation</Text>
		</View>
	);
}
