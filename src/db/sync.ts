import { synchronize } from '@nozbe/watermelondb/sync';
import database from './index.native';
import { supabase } from '@/lib/supabase';

export const mySync = async () => {
	await synchronize({
		database,
		pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
			// sync with supabase
			console.log('syncing with supabase');
			return {
				changes: {},
				timestamp: +new Date(),
			};
		},
		pushChanges: async ({ lastPulledAt, changes }) => {
			// push changes to supabase
			console.log('pushing changes to supabase');
			console.log('changes', changes);
			const { error } = await supabase.rpc('push', { changes });
			console.log('error', error);
			// TODO: why delete not working
		},
		sendCreatedAsUpdated: true,
	});
};
