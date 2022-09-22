import { ILogin } from './../types/auth.model';

export class LogInUser {

  static readonly type = '[Api Log User In]';

  constructor(public user: ILogin) {}

}



export class LogOutUser {
  static readonly type = '[Header Log Out User]';

  constructor() {};

}
