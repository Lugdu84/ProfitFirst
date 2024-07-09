import { allocationsCollection } from '@/db/index.native';
import { Model } from '@nozbe/watermelondb';
import {
	children,
	date,
	field,
	readonly,
} from '@nozbe/watermelondb/decorators';
import AccountAllocation from './AccountAllocation';

export default class Allocation extends Model {
	static table = 'allocations';

	static associations = {
		account_allocs: { type: 'has_many', foreignKey: 'allocation_id' },
	};

	@field('income') income!: number;
	@readonly @date('created_at') createdAt!: Date;

	@children('account_allocs') accountAllocations!: AccountAllocation[];
}
