import AccountListItem from '@/components/AccountListItem';
import AccountsList from '@/components/AccountsList';
import { View, Text, StyleSheet } from 'react-native';

export default function AccountsScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>Name</Text>
				<Text>CAP</Text>
				<Text>TAP</Text>
			</View>
			<AccountsList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
});
