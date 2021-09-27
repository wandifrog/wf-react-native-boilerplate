import React from 'react'
import { ScrollView } from 'react-native'
import { screenHeight, screenWidth } from '../constants/Dimension.constant'
import images from '../constants/Images.constant'
import useTheme from '../hooks/Theme.hook'
import useTranslation from '../hooks/Translation.hook'
import WFButton from '../components/WFButton'
import HStack from '../components/HStack'
import WFImage from '../components/WFImage'
import WFText from '../components/WFText'
import VStack from '../components/VStack'

const ProfileScreen = () => {
  const { t } = useTranslation()
  const colors = useTheme()

  return (
    <ScrollView contentContainerStyle={{ height: screenHeight, width: screenWidth, backgroundColor: colors.background }} >
      <HStack top={screenHeight / 12} justify="center">
        <WFImage source={images.logoRaise} width={150} height={150} resizeMode="contain" />
      </HStack>
      <VStack top={10} paddingHorizontal={12} align="center" >
        <WFText top={8} size={34} bold>{t.global.welcome}</WFText>
        <WFText top={4} size={20}>{t.global.welcome}</WFText>
        <WFButton bottom={9} label={'Ganti Bahasa'} onPress={() => { }} />
        <WFButton bottom={9} label={'Ganti Tema'} onPress={() => { }} />
      </VStack>
    </ScrollView>
  )
}

export default ProfileScreen
