import React from 'react'
import { Image, Text, View } from 'react-native'
import images from './constants/Images.constant'

/**
 * Splash or Launch - Screen
 */
export default function SplashScreen() {

  return ( // dont'use WF components
    <View style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: '#F1FCF9',
      alignItems: 'center',
    }}>
      <Image
        fadeDuration={0}
        source={images.bgYamato}
        style={{
          width: 320,
          height: 320,
          marginTop: 120,
        }}
      />
      <Text style={{
        marginTop: 55,
        width: 240,
        fontSize: 17,
        lineHeight: 26,
        color: '#30294C',
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
        Welcome to Raise guild community
      </Text>
    </View>
  )
}
