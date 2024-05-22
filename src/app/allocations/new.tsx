import database, { allocationsCollection } from '@/db/index.native';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function NewAllocationScreen() {
	const [income, setIncome] = useState('');

	const saveAllocation = async () => {
		await database.write(async () => {
			await allocationsCollection.create((allocation) => {
				allocation.income = Number(income);
			});
		});
		setIncome('');
	};
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'New allocation' }} />
			<View style={styles.inputRow}>
				<Text style={styles.label}>Income</Text>
				<TextInput
					value={income}
					onChangeText={setIncome}
					placeholder="1234"
					style={styles.input}
				/>
			</View>

			<Button
				title="save"
				onPress={saveAllocation}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	inputRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		width: 100,
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
		flex: 1,
	},
});
