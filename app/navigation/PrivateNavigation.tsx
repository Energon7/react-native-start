import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { routes } from '@/navigation/routes'
import { useAuth } from '@/hooks/useAuth'
import { Auth } from '@/components/screens'
import { AppConstants } from '@/app.constants'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()
const PrivateNavigation: FC = () => {
	const { user } = useAuth()
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: AppConstants.primary
				}
			}}
		>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
