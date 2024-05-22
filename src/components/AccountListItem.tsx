import Account from '@/model/Account';
import { View, Text, StyleSheet } from 'react-native';

type AccountListItemProps = {
	account: Account;
};

export default function AccountListItem({ account }: AccountListItemProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{account.name}</Text>
			<Text style={styles.percentage}>{account.cap} %</Text>
			<Text style={styles.percentage}>{account.tap} %</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 10,
	},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	percentage: {},
});