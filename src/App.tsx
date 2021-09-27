import React from 'react'
import { AppProvider } from './contexts/App.context'
import Navigation from './Navigation'
import SplashScreen from './SplashScreen'

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


export default App
