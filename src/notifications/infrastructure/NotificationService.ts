import { INotificationService } from '../model/INotificationService';
import { Notification } from '../model/Notification';

export class NotificationService implements INotificationService {
  send<T>(notification: Notification<T>) {
    console.log(
      `[${notification.type}] to ${notification.toId}: ${notification.msg}`
    );
  }
}
