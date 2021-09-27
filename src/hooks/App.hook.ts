import React from 'react'
import { AppDispatchContext, AppStateContext } from '../contexts/App.context'

function useAppState() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) throw new Error('useAppState must be used within a AppProvider')
  return context
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) throw new Error('useAppDispatch must be used within a AppProvider')
  return context
}

function useApp(): [AppState, AppDispatch] {
  return [useAppState(), useAppDispatch()]
}

export default useApp
