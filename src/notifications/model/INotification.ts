import { User } from "../../users/model/User";

export interface INotification<T> {
      _toId: User['id'],
      _msg: string,
      _type: T
}