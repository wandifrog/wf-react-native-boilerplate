import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/Login.screen'

const RootStack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}


export default Navigation
