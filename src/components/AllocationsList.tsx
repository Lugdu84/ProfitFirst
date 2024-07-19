import { allocationsCollection } from '@/db/index.native';
import Allocation from '@/model/Allocation';
import { withObservables } from '@nozbe/watermelondb/react';
import { FlatList } from 'react-native';
import AllocationListItem from './AllocationListItem';
import { Q } from '@nozbe/watermelondb';

type AllocationsListProps = {
	allocations: Allocation[];
};

function AllocationsList({ allocations }: AllocationsListProps) {
	console.log('AllocationsList', allocations[3]._raw);
	return (
		<FlatList
			data={allocations}
			contentContainerStyle={{ gap: 10, padding: 10 }}
			renderItem={({ item }) => <AllocationListItem allocation={item} />}
		/>
	);
}

const enhance = withObservables([], () => ({
	allocations: allocationsCollection.query(Q.sortBy('created_at', Q.desc)),
}));

export default enhance(AllocationsList);
