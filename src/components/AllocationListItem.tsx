import Allocation from '@/model/Allocation';
import { View, Text, StyleSheet } from 'react-native';

type AllocationListItemProps = {
	allocation: Allocation;
};

export default function AllocationListItem({
	allocation,
}: AllocationListItemProps) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.date}>
					{allocation.createdAt.toLocaleDateString()}
				</Text>
				<Text style={styles.income}>{allocation.income} €</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
	},
	header: {
		flexDirection: 'row',
		backgroundColor: 'gainsboro',
		justifyContent: 'space-between',
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
});
