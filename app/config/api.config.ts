export const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_URL
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `${string}`
export const getUserUrl = (string: string) => `users/${string}`
