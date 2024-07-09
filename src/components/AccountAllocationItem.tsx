import Account from '@/model/Account';
import AccountAllocation from '@/model/AccountAllocation';
import Allocation from '@/model/Allocation';
import { withObservables } from '@nozbe/watermelondb/react';
import { StyleSheet, Text, View } from 'react-native';

type AccountAllocationItemProps = {
	accountAllocation: AccountAllocation;
	account: Account;
	allocation: Allocation;
};
function AccountAllocationItem({
	accountAllocation,
	account,
	allocation,
}: AccountAllocationItemProps) {
	return (
		<View style={styles.view}>
			<Text>{account.name}</Text>
			<Text>{accountAllocation.amount} €</Text>
		</View>
	);
}

const enhance = withObservables(
	['accountAllocation'],
	({ accountAllocation }: { accountAllocation: AccountAllocation }) => ({
		accountAllocation,
		account: accountAllocation.account,
		allocation: accountAllocation.allocation,
	})
);

export default enhance(AccountAllocationItem);

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
