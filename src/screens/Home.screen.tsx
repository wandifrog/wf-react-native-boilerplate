import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import OText from '../components/OText'
import useNavigation from '../hooks/Navigation_old.hook'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <OText bottom={100}>asdasda</OText>
      <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda 3</OText>
    </ScrollView>
  )
}

export default HomeScreen
