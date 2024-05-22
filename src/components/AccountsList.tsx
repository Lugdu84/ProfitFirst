import { FlatList } from 'react-native';
import AccountListItem from '@/components/AccountListItem';
import { accountsCollection } from '@/db/index.native';
import Account from '@/model/Account';
import { withObservables } from '@nozbe/watermelondb/react';

type AccountsListProps = {
	accounts: Account[];
};

function AccountsList({ accounts }: AccountsListProps) {
	return (
		<FlatList
			data={accounts}
			renderItem={({ item }) => <AccountListItem account={item} />}
			contentContainerStyle={{ gap: 10 }}
		/>
	);
}

const enhance = withObservables(['accounts'], () => ({
	accounts: accountsCollection.query(),
}));

export default enhance(AccountsList);
