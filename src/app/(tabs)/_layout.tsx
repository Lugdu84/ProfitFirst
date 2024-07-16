import { Redirect, Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '@/providers/AuthProvider';

export default function TabsLayout() {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Redirect href={'/login'} />;
	}
	return (
		<Tabs>
			<Tabs.Screen
				name="allocations"
				options={{
					headerShown: false,
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name="dashboard"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="accounts"
				options={{
					title: 'Accounts',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons
							name="account-tree"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			{/* <Tabs.Screen
				name="index"
				options={{ href: null }}
			/> */}
		</Tabs>
	);
}
