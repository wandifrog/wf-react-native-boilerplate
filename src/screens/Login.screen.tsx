import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { dpi } from '../functions/Common.function'
import { screenHeight, screenWidth } from '../constants/Dimension.constant'
import images from '../constants/Images.constant'
import useTheme from '../hooks/Theme.hook'
import useTranslation from '../hooks/Translation.hook'
import OButton from '../components/WFButton'
import HStack from '../components/HStack'
import OImage from '../components/WFImage'
import OText from '../components/WFText'
import VStack from '../components/VStack'

const LoginScreen = () => {
  const { t } = useTranslation()
  const colors = useTheme()

  return (
    <ScrollView contentContainerStyle={{ height: screenHeight, width: screenWidth, backgroundColor: 'white' }} >
      <HStack top={screenHeight / 5} justify="center">
        <OImage source={images.bgYamato} width={dpi(54)} height={dpi(24)} resizeMode="contain" />
      </HStack>
      <OText top={dpi(4)} size={dpi(17)} center bold>{t.global.welcome}</OText>
      <VStack top={screenHeight / 4} paddingHorizontal={dpi(12)} >
        <OButton bottom={dpi(9)} label={t.global.login} onPress={() => {}} />
        <HStack bottom={dpi(8)} justify="center">
          <OText right={dpi(2)} size={dpi(6)}>{t.login.dontHaveOrbit}</OText>
          <TouchableOpacity>
            <OText size={dpi(6)} color="red" bold>{t.global.buyNow}</OText>
          </TouchableOpacity>
        </HStack>
        <OText size={dpi(7)} color={colors.grey_100} center>{t.global.or}</OText>
        <VStack style={{ zIndex: 10 }}>
          <OButton top={dpi(4)} backgroundWhite label={t.login.buyOrbitFromOutlet} />
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default LoginScreen
