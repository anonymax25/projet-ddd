import { User } from '../../users/model/User';

export class Notification<T> {
  constructor(
    private _toId: User['id'],
    private _msg: string,
    private _type: T
  ) {}

  get toId(): User['id'] {
    return this._toId;
  }

  get msg(): string {
    return this._msg;
  }

  get type(): T {
    return this._type;
  }

}
