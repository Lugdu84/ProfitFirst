import {
	createTable,
	schemaMigrations,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
	migrations: [
		// We'll add migration definitions here later
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
	],
});
