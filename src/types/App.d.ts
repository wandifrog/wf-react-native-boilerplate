type AppState = {
  darkMode: boolean
  language: 'id' | 'en'
  modemData: any
  memberData: any
  screen: any
}

type AppAction =
| { type: 'CHANGE_THEME' }
| { type: 'CHANGE_LANGUAGE' }
| { type: 'SET_MODEM_DATA', modemData: any }
| { type: 'SET_MEMBER_DATA', memberData: any }

type AppDispatch = (action: AppAction) => void
