import axios from 'axios'
import { API_URL } from '@/config/api.config'
import { deleteTokenStorage, getAccessToken } from '@/services/auth/auth.helper'
import { errorCatch } from '@/services/api/error.api'
import { getNewTokens } from '@/services/api/helper.auth'

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch('jwt must be provided')) &&
			error.config &&
			!error.config._isReady
		) {
			originalRequest._isReady = true

			try {
				await getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') await deleteTokenStorage()
			}
		}
	}
)
export default instance
