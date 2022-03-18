import { Notification } from './Notification';

export interface INotificationService {
  send<T>(notification: Notification<T>): void;
}
