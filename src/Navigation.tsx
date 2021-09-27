import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/Home.screen'
import ProfileScreen from './screens/Profile.screen'
import CreateEventScreen from './screens/CreateEvent.screen'
import EventDetailScreen from './screens/EventDetail.screen'

const RootStack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="CreateEvent" component={CreateEventScreen} />
        <RootStack.Screen name="EventDetail" component={EventDetailScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
