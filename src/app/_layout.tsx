import React from 'react';
import { Slot } from 'expo-router';
import AuthProvider, { useAuth } from '@/providers/AuthProvider';

export default function RootLayout() {
	return (
		<AuthProvider>
			<Slot />
		</AuthProvider>
	);
}

// youtube : 02:45
