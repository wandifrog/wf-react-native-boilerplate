import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { screenHeight, screenWidth } from '../constants/Dimension.constant'
import images from '../constants/Images.constant'
import useTheme from '../hooks/Theme.hook'
import useTranslation from '../hooks/Translation.hook'
import WFButton from '../components/WFButton'
import HStack from '../components/HStack'
import WFImage from '../components/WFImage'
import WFText from '../components/WFText'
import VStack from '../components/VStack'
import Spacer from '../components/Spacer'

const LoginScreen = () => {
  const { t } = useTranslation()
  const colors = useTheme()

  return (
    <VStack align="center">
      <HStack top={50}>
        <WFImage source={images.logoRaise} width={76} height={76} resizeMode="contain" />
        <WFText left={8} size={18}>Raise</WFText>
      </HStack>
      <WFText top={8} size={18}>{'kk cc, login dulu yaa >_<'}</WFText>
      <WFText top={4} size={20}>{t.global.welcome}</WFText>
      <Spacer />
      <WFButton bottom={0} label={'Login'} onPress={() => { }} />
      {/* <Spacer /> */}
    </VStack>
  )
}

export default LoginScreen
