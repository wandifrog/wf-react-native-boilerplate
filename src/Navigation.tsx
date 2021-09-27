import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateEventScreen from './screens/CreateEvent.screen'
import EventDetailScreen from './screens/EventDetail.screen'
import HomeScreen from './screens/Home.screen'
import LoginScreen from './screens/Login.screen'
import ProfileScreen from './screens/Profile.screen'

const RootStack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="CreateEvent" component={CreateEventScreen} />
        <RootStack.Screen name="EventDetail" component={EventDetailScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
