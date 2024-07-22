import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { fonts } from '@/config/font.config'
import AuthProvider from '@/providers/auth/AuthProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@/navigation/Navigation'
import { StatusBar } from 'expo-status-bar'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
	const [loaded] = useFonts(fonts)

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider isLoaded={loaded}>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</AuthProvider>
				<StatusBar style='light' />
			</QueryClientProvider>
		</>
	)
}
