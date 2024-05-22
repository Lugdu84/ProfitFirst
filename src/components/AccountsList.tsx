import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AccountListItem from '@/components/AccountListItem';
import { accountsCollection } from '@/db/index.native';
import Account from '@/model/Account';

export default function AccountsList() {
	const [accounts, setAccounts] = useState<Account[]>([]);

	useEffect(() => {
		// fetch accounts from database

		const fetchAccounts = async () => {
			const accounts = await accountsCollection.query().fetch();
			setAccounts(accounts);
		};
		fetchAccounts();
	}, []);

	return (
		<FlatList
			data={accounts}
			renderItem={({ item }) => <AccountListItem account={item} />}
			contentContainerStyle={{ gap: 10 }}
		/>
	);
}
