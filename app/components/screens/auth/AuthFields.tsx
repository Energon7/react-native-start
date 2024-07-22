import { FC } from 'react'
import { Control } from 'react-hook-form'
import { IAuthFormData } from '@/shared/types/auth.interface'
import Field from '@/components/ui/form-elements/field/Field'
import { validEmail } from '@/shared/regex'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
	return (
		<>
			<Field
				placeholder='Enter email address'
				control={control}
				name='email'
				rules={{
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>

			<Field
				placeholder='Enter password'
				control={control}
				name='password'
				secureTextEntry
				rules={
					isPassRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Password should be minimum 6 characters long'
								}
							}
						: {}
				}
				keyboardType='email-address'
			/>
		</>
	)
}

export default AuthFields
