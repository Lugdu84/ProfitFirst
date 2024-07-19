import { Model } from '@nozbe/watermelondb';
import {
	field,
	readonly,
	date,
	immutableRelation,
	text,
	nochange,
} from '@nozbe/watermelondb/decorators';
import Account from './Account';
import Allocation from './Allocation';

export default class AccountAllocation extends Model {
	static table = 'account_allocs';

	static associations = {
		accounts: { type: 'belongs_to', key: 'account_id' },
		allocations: { type: 'belongs_to', key: 'allocation_id' },
	};

	@readonly @date('created_at') createdAt!: Date;
	@immutableRelation('accounts', 'account_id') account!: Account;
	@immutableRelation('allocations', 'allocation_id') allocation!: Allocation;
	@field('cap') cap!: number;
	@field('amount') amount!: number;
	@nochange @text('user_id') userId!: string;
}
