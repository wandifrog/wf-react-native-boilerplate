import globalTranslation from '../translations/Global.translation'
import loginTranslation from '../translations/Login.translation'
import useApp from './App.hook'

function useTranslation() {
  const [state] = useApp()
  const { language } = state

  const t = {
    global: globalTranslation[language],
    login: loginTranslation[language],
  }

  return { t, language }
}

export default useTranslation
