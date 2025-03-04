import { FC, useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu'
import PrivateNavigation from '@/navigation/PrivateNavigation'
import { useCheckAuth } from '@/providers/auth/useCheckAuth'

const Navigation: FC = () => {
	const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () => {
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		})

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	useCheckAuth(currentRoute)
	return (
		<NavigationContainer ref={navRef}>
			<PrivateNavigation />
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</NavigationContainer>
	)
}

export default Navigation
