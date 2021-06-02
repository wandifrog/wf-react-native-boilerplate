import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { dpi } from '../functions/Common.function'
import { screenHeight, screenWidth } from '../constants/Dimension.constant'
import images from '../constants/Images.constant'
import useNavigation from '../hooks/Navigation_old.hook'
import useTheme from '../hooks/Theme.hook'
import useTranslation from '../hooks/Translation.hook'
import OButton from '../components/OButton'
import HStack from '../components/HStack'
import OImage from '../components/OImage'
import OText from '../components/OText'
import OView from '../components/OView'


const Login2Screen = () => {
  const { t } = useTranslation()
  const colors = useTheme()
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }} >
      <HStack top={screenHeight / 5} justify="center">
        <OImage source={images.orbitLogo} width={dpi(54)} height={dpi(24)} resizeMode="contain" />
      </HStack>
      <OText top={dpi(4)} size={dpi(17)} center bold>hello world</OText>
      <OView top={screenHeight / 4} paddingHorizontal={dpi(12)} >
        <OButton bottom={dpi(9)} label="Login" />
        <HStack bottom={dpi(8)} justify="center">
          <OText right={dpi(2)} size={dpi(6)}>{t.login.dontHaveOrbit}</OText>
          <TouchableOpacity>
            <OText size={dpi(6)} color="red" bold>{t.global.buyNow}</OText>
          </TouchableOpacity>
        </HStack>
        <OText size={dpi(7)} color={colors.grey_100} center>{t.global.or}</OText>
        <OView style={{ zIndex: 10 }}>
          <OButton top={dpi(4)} backgroundWhite label={t.login.buyOrbitFromOutlet} />
        </OView>
      </OView>
      <OView style={{ position: 'absolute', bottom: 0 }}>
        <OImage source={images.waveImage}
          width={screenWidth} height={dpi(69)} resizeMode="stretch" />
      </OView>
    </ScrollView>
  )
}

export default Login2Screen
