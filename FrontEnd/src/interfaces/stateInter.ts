export interface IInitialState {
  handleLogin():Promise<void>,
  handleInfoUser(a:object):void,
  handleEmail(a: string): void,
  handlePassword(a: string):void,
  handleMessage(a:string):void,
  handleUserData(a:object):void,
  email: string,
  password: string,
  msg: string | void,
  userData: object | void,
}
