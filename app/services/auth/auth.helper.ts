import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
import {
	EnumSecureStore,
	IAuthResponse,
	ITokens
} from '@/shared/types/auth.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)

	return accessToken || null
}

export const saveTokenStorage = async (token: ITokens) => {
	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, token.accessToken)
	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, token.refreshToken)
}

export const deleteTokenStorage = async () => {
	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse((await AsyncStorage.getItem('user')) || '{}')
	} catch (e) {
		return null
	}
}

export const saveToStorage = async (data: IAuthResponse) => {
	await saveTokenStorage(data)
	try {
		return await AsyncStorage.setItem('user', JSON.stringify(data))
	} catch (e) {}
}
