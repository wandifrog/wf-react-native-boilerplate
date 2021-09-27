import React from 'react'

const initialState: AppState = {
  darkMode: false,
  language: 'id',
  modemData: {},
  memberData: {},
  screen: {}, // screen || module || feature || flow
}

const AppStateContext = React.createContext<AppState | undefined>(undefined)
const AppDispatchContext = React.createContext<AppDispatch | undefined>(undefined)

// Ugly reducer - still research for build better and elegance reducer code
function appReducer(prevState: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return { ...prevState, darkMode: !prevState.darkMode }
    }
    case 'CHANGE_LANGUAGE': {
      return { ...prevState, language: prevState.language === 'id' ? 'en' : 'id' }
    }
    case 'SET_MODEM_DATA': {
      return { ...prevState, modemData: action.modemData }
    }
    case 'SET_MODEM_DATA': {
      return { ...prevState, memberData: action.modemData }
    }
    default: {
      return prevState
    }
  }
}

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = React.useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export { AppStateContext, AppDispatchContext, AppProvider, appReducer }
