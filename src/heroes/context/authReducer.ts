import { AuthAction, authActionTypes } from "../models";
import { AuthState } from "../models";

const getInitialState = () => {
  return (
    JSON.parse(localStorage.getItem('user')!) as AuthState || new AuthState
  );
}

export const authInitialState = getInitialState();

export const authReducer = (state: AuthState = authInitialState, action: AuthAction): AuthState => {

  switch (action.type) {
    case authActionTypes.login:
      return action.payload;
    case authActionTypes.logout:
      return action.payload;
    default:
      return state
  }
}