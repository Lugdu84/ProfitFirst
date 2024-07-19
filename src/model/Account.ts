import { Model } from '@nozbe/watermelondb';
import { field, nochange, text } from '@nozbe/watermelondb/decorators';

export default class Account extends Model {
	static table = 'accounts';

	@text('name') name!: string;
	@field('cap') cap!: number;
	@field('tap') tap!: number;
	@nochange @text('user_id') userId!: string;
}
