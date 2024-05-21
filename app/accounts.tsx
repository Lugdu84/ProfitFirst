import AccountsList from '@/components/AccountsList';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { create } from 'react-test-renderer';

export default function AccountsScreen() {
	const [name, setName] = useState('');
	const [cap, setCap] = useState('');
	const [tap, setTap] = useState('');

	const createAccount = () => {
		console.warn('Create account', name, cap, tap);
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
