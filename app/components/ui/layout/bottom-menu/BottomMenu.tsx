import { FC } from 'react'
import { View } from 'react-native'
import { TypeNav } from './menu.interface'
import { menuData } from '@/components/ui/layout/bottom-menu/menu.data'
import MenuItem from '@/components/ui/layout/bottom-menu/MenuItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1C1E2E]'
			style={{
				paddingBottom: bottom + 10
			}}
		>
			{menuData.map(item => (
				<MenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomMenu
