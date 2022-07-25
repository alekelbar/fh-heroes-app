import React, { useReducer } from "react"
import { AuthAction, authActionTypes, AuthState } from "../models"
import { AuthContext } from "./AuthContext"
import { authInitialState, authReducer } from "./authReducer"

type props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: props) => {

  const [user, UserDispatch] = useReducer(authReducer, authInitialState);

  const onLogin = () => {
    const authAction: AuthAction = new AuthAction
      (
        authActionTypes.login,
        new AuthState('Alexander', true)
      )
    UserDispatch(authAction)
    localStorage.setItem('user', JSON.stringify(authAction.payload));
  }

  const onLogout = () => {
    const authAction: AuthAction = new AuthAction
      (
        authActionTypes.logout,
      )
    UserDispatch(authAction);
  }

  return (
    <AuthContext.Provider value={{ user, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
