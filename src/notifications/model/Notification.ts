import { NotificationType } from './NotificationType';

export class Notification {
  constructor(
    private _toId: string,
    private _msg: string,
    private _type: NotificationType
  ) {}

  get toId(): string {
    return this._toId;
  }

  get msg(): string {
    return this._msg;
  }

  get type(): NotificationType {
    return this._type;
  }

  public toString(): string {
    return `Notification (${this.toId}) to (${this.toId}): ${this.msg}`;
  }
}
