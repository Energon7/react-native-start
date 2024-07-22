import { FC } from 'react'
import LottieView from 'lottie-react-native'
import { Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const Splash: FC = () => {
	return (
		<LottieView
			autoPlay
			style={{
				width: 200,
				height: 200,
				backgroundColor: '#eee'
			}}
			loop={true}
			source={require('@/assets/lotties/splash.json')}
		/>
	)
}

export default Splash
