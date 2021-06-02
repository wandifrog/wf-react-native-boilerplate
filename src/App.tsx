import React from 'react'
import { Image, Text, View } from 'react-native'
import { AppProvider } from './contexts/App.context'
import { dpi } from './functions/Common.function'
import images from './constants/Images.constant'
import Navigation from './Navigation'

const App = () => {
  const [splashScreen, setSplashScreen] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setSplashScreen(false), 1200)
  }, [])

  return (
    <React.Fragment>
      {splashScreen ? <SplashScreen /> : null}
      <AppProvider>
        {!splashScreen ? <Navigation /> : null}
      </AppProvider>
    </React.Fragment>
  )
}

const SplashScreen = () => {
  // don't use Orbit components

  return (
    <View style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <View style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={images.orbitLogo2x} style={{
          width: dpi(100),
          height: dpi(45)
        }} />
      </View>
      <Image source={images.splashScreenWave} resizeMode="stretch"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '24%'
        }} />
      <View style={{
        position: 'absolute',
        bottom: '4%',
        width: '100%',
        backgroundColor: 'transparent'
      }}>
        <Text style={{
          fontSize: dpi(6),
          color: 'white',
          textAlign: 'center'
        }}>
          Versi Aplikasi 1.0.0
        </Text>
      </View>
    </View>
  )
}


export default App
