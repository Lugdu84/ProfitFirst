import { allocationsCollection } from '@/db/index.native';
import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, writer } from '@nozbe/watermelondb/decorators';

export default class Allocation extends Model {
	static table = 'allocations';

	@field('income') income!: number;
	@readonly @date('created_at') createdAt!: Date;
}
