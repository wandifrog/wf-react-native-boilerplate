import { darkTheme, lightTheme } from '../constants/Theme.constant'
import useApp from './App.hook'

function useTheme(): Colors {
  const [state] = useApp()
  const colors = state.darkMode ? darkTheme : lightTheme

  return colors
}

export default useTheme
