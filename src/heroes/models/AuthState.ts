
export class AuthState {
  constructor(private _user: string = '', private _login: boolean = false) { }
  public get user(): string { return this.user; }
  public get login(): boolean { return this._login; }
}