import { AuthState } from "./AuthState";

export enum authActionTypes {
  login,
  logout
}

type loginAction = authActionTypes;

export class AuthAction {

  constructor(private _type: loginAction, private _payload: AuthState = new AuthState) { }

  public get type(): loginAction { return this._type; }
  public get payload(): AuthState { return this._payload; }
}