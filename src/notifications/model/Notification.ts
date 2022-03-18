export class Notification<T> {
  constructor(
    private _toId: string,
    private _msg: string,
    private _type: T
  ) {}

  get toId(): string {
    return this._toId;
  }

  get msg(): string {
    return this._msg;
  }

  get type(): T {
    return this._type;
  }

  public toString(): string {
    return `[${this.type}] to ${this.toId}: ${this.msg}`;
  }
}
