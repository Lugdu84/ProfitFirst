import Account from '@/model/Account';
import { withObservables } from '@nozbe/watermelondb/react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import database from '@/db/index.native';

type AccountListItemProps = {
	account: Account;
};

function AccountListItem({ account }: AccountListItemProps) {
	const handleDelete = async () => {
		await database.write(async () => {
			await account.markAsDeleted();
		});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{account.name}</Text>
			<Text style={styles.percentage}>{account.cap} %</Text>
			<Text style={styles.percentage}>{account.tap} %</Text>

			<AntDesign
				onPress={handleDelete}
				style={styles.deleteButton}
				name="delete"
				size={20}
				color="red"
			/>
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
		flex: 1,
	},
	percentage: {
		flex: 1,
	},
	deleteButton: {},
});

const enhance = withObservables(
	['account'],
	({ account }: AccountListItemProps) => ({
		account,
	})
);

export default enhance(AccountListItem);
