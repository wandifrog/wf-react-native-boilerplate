import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import useNavigation from '../hooks/Navigation_old.hook'

const DasboardScreen = () => {
  const navigation = useNavigation()

  return (
    <React.Fragment>
      <Text>DashboardScreen</Text>
      <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default DasboardScreen
