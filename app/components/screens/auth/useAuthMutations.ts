import { UseFormReset } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/services/auth/auth.service'
import { useMemo } from 'react'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { user, setUser } = useAuth()

	const { mutate: loginSync, isPending: isLoginLoading } = useMutation({
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		mutationKey: ['login'],
		onSuccess: async data => {
			reset()
			setUser(data.user)

			// setTimeout(() => {
			// 	reset()
			// 	setUser(data.user)
			// })
		}
	})

	const { mutate: registerSync, isPending: isRegisterLoading } = useMutation({
		mutationFn: ({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),
		mutationKey: ['register'],
		onSuccess: async data => {
			// setTimeout(() => {
			// 	reset()
			// 	setUser(data.user)
			// })
			reset()
			setUser(data.user)
		}
	})

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isPending: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
