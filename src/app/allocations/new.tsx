import database, {
	accountsCollection,
	allocationsCollection,
} from '@/db/index.native';
import Account from '@/model/Account';
import { withObservables } from '@nozbe/watermelondb/react';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

type NewAllocationScreenProps = {
	accounts: Account[];
};

function NewAllocationScreen({ accounts }: NewAllocationScreenProps) {
	const [income, setIncome] = useState('');

	const saveAllocation = async () => {
		await database.write(async () => {
			await allocationsCollection.create((allocation) => {
				allocation.income = Number.parseFloat(income);
			});
			router.back();
		});
	};

	const calculateCap = (percent: number) => {
		return `${(Number(income) * percent) / 100} €`;
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'New allocation' }} />
			<View style={styles.inputRow}>
				<Text style={styles.label}>Income</Text>
				<TextInput
					value={income}
					keyboardType="numeric"
					onChangeText={setIncome}
					placeholder="1234"
					style={styles.input}
				/>
			</View>
			{accounts.map((account) => (
				<View
					key={account.id}
					style={styles.inputRow}>
					<Text style={{ flex: 1 }}>
						{account.name} {account.cap} %
					</Text>
					<Text>{calculateCap(account.cap)}</Text>
					{/* <Text>{showResult(account.tap)}</Text> */}
				</View>
			))}

			<Button
				title="save"
				onPress={saveAllocation}
			/>
		</View>
	);
}

const enhance = withObservables([], () => ({
	accounts: accountsCollection.query(),
}));

export default enhance(NewAllocationScreen);

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
