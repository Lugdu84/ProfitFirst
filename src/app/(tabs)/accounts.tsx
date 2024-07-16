import AccountsList from '@/components/AccountsList';
import database, { accountsCollection } from '@/db/index.native';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default function AccountsScreen() {
	const [name, setName] = useState('');
	const [cap, setCap] = useState('');
	const [tap, setTap] = useState('');

	const reset = () => {
		setName('');
		setCap('');
		setTap('');
	};

	const createAccount = async () => {
		await database.write(async () => {
			await accountsCollection.create((account) => {
				account.name = name;
				account.cap = Number(cap);
				account.tap = Number(tap);
			});
		});
		reset();
	};

	// const testUpdate = async () => {
	// 	await database.write(async () => {
	// 		const account = await accountsCollection.query().fetch();
	// 		await account[0].update((acc) => {
	// 			acc.cap = 50;
	// 		});
	// 	});
	// };

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>Name</Text>
				<Text>CAP</Text>
				<Text>TAP</Text>
				<Text>Actions</Text>
			</View>
			<AccountsList />
			<View style={styles.inputRow}>
				<TextInput
					value={name}
					onChangeText={(text) => setName(text)}
					placeholder="Name"
					style={styles.input}
				/>
				<TextInput
					value={cap}
					keyboardType="number-pad"
					onChangeText={(text) => setCap(text)}
					placeholder="CAP %"
					style={styles.input}
				/>
				<TextInput
					keyboardType="number-pad"
					value={tap}
					onChangeText={(text) => setTap(text)}
					placeholder="TAP %"
					style={styles.input}
				/>
			</View>

			<Button
				title="Add account"
				onPress={createAccount}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	inputRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		marginTop: 10,
	},
	input: {
		// flex: 1,
	},
	button: {
		marginTop: 10,
	},
});
