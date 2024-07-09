import {
	createTable,
	schemaMigrations,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
	migrations: [
		{
			toVersion: 2,
			steps: [
				createTable({
					name: 'allocations',
					columns: [
						{ name: 'created_at', type: 'number' },
						{ name: 'income', type: 'number' },
					],
				}),
			],
		},
		{
			toVersion: 3,
			steps: [
				createTable({
					name: 'account_allocations',
					columns: [
						{ name: 'created_at', type: 'number' },
						{ name: 'account_id', type: 'string' },
						{ name: 'allocation_id', type: 'string' },
						{ name: 'amount', type: 'number' },
						{ name: 'cap', type: 'number' },
					],
				}),
			],
		},
		{
			toVersion: 4,
			steps: [
				createTable({
					name: 'account_allocs',
					columns: [
						{ name: 'created_at', type: 'number' },
						{ name: 'account_id', type: 'string' },
						{ name: 'allocation_id', type: 'string' },
						{ name: 'amount', type: 'number' },
						{ name: 'cap', type: 'number' },
					],
				}),
			],
		},
	],
});
