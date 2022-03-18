import { Notification } from '../../notifications/model/Notification';

export interface INotificationService {
  send<T>(notification: Notification<T>): void;
}
