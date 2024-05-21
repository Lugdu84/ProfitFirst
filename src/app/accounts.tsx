import AccountsList from '@/components/AccountsList';
import database from '@/db/index.native';
import Account from '@/model/Account';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default function AccountsScreen() {
	const [name, setName] = useState('');
	const [cap, setCap] = useState('');
	const [tap, setTap] = useState('');

	const createAccount = async () => {
		console.warn('Create account', name, cap, tap);
		await database.write(async () => {
			const newAccount = await database
				.get<Account>('accounts')
				.create((account) => {
					account.name = name;
					account.cap = Number(cap);
					account.tap = Number(tap);
				});
		});
	};

	const handleRead = async () => {
		const accountsCollection = database.get<Account>('accounts');
		const accounts = await accountsCollection.query().fetch();

		console.warn(
			'accounts',
			accounts.map((account) => account)
		);
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>Name</Text>
				<Text>CAP</Text>
				<Text>TAP</Text>
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
			<Button
				title="Read"
				onPress={handleRead}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
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

// at 2:00:00
