import cn from 'clsx'
import React, { JSX } from 'react'
import { IField } from '@/components/ui/form-elements/field/field.interface'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
							error ? 'border-red-500' : 'border-transparent'
						)}
					>
						<TextInput
							autoCapitalize={'none'}
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							className='text-white text-base'
							{...rest}
						/>
					</View>
					{error && <Text className='text-red'>{error.message}</Text>}
				</>
			)}
		/>
	)
}

export default Field
