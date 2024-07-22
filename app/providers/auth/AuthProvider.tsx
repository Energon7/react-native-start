import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import type { IUser } from '@/shared/types/user.interface'
import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'

export type TypeUserState = IUser | null

interface IContext {
	user: TypeUserState | null
	setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext)

// let ignore = Splash.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<{ isLoaded: boolean }>> = ({
	children,
	isLoaded
}) => {
	const [user, setUser] = useState<TypeUserState>(null)
	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()
				if (accessToken) {
					const user = await getUserFromStorage()
					if (isMounted) {
						setUser(user)
					}
				}
			} catch {
			} finally {
				console.log(isLoaded)
				//if (isLoaded) await Splash.hideAsync()
			}
		}

		let ignore = checkAccessToken()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
