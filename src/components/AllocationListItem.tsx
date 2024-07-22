import database, {
	accountAllocationsCollection,
	allocationsCollection,
} from '@/db/index.native';
import AccountAllocation from '@/model/AccountAllocation';
import Allocation from '@/model/Allocation';
import { withObservables } from '@nozbe/watermelondb/react';
import { View, Text, StyleSheet } from 'react-native';
import AccountAllocationItem from './AccountAllocationItem';
import { AntDesign } from '@expo/vector-icons';

type AllocationListItemProps = {
	allocation: Allocation;
	accountAllocations: AccountAllocation[];
};

function AllocationListItem({
	allocation,
	accountAllocations,
}: AllocationListItemProps) {
	const handleDelete = async () => {
		await database.write(async () => {
			await allocation.markAsDeleted();
		});
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.date}>
					{allocation.createdAt.toLocaleDateString()}
				</Text>
				<Text style={styles.income}>{allocation.income} €</Text>
				<AntDesign
					onPress={handleDelete}
					style={styles.deleteButton}
					name="delete"
					size={20}
					color="red"
				/>
			</View>
			<View style={styles.accountAllocationsView}>
				{accountAllocations.map((item) => (
					<AccountAllocationItem
						accountAllocation={item}
						key={item.id}
					/>
				))}
			</View>
		</View>
	);
}

const enhance = withObservables(
	['allocation'],
	({ allocation }: { allocation: Allocation }) => ({
		allocation,
		accountAllocations: allocation.accountAllocations,
	})
);

export default enhance(AllocationListItem);

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		overflow: 'hidden',
	},
	header: {
		flexDirection: 'row',
		backgroundColor: 'gainsboro',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	income: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'green',
	},
	date: {
		fontSize: 12,
	},
	accountAllocationsView: {
		paddingVertical: 10,
		gap: 5,
	},
	deleteButton: {
		padding: 10,
	},
});
