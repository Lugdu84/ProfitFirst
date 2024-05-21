import { View, Text, FlatList } from 'react-native';
import React from 'react';
import AccountListItem from '@/components/AccountListItem';

export default function AccountsList() {
	return (
		<FlatList
			data={[1, 2, 3]}
			renderItem={() => <AccountListItem />}
			contentContainerStyle={{ gap: 10 }}
		/>
	);
}
