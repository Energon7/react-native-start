import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import AuthFields from '@/components/screens/auth/AuthFields'
import DismissKeyboard from '@/components/ui/form-elements/field/DissmissKeyboard'
import { SafeAreaView } from 'react-native'

const Auth: FC = () => {
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {}

	return (
		<SafeAreaView className='flex-1'>
			<DismissKeyboard>
				<AuthFields control={control} isPassRequired={true} />
			</DismissKeyboard>
		</SafeAreaView>
	)
}

export default Auth
