import { INotificationService } from '../model/INotificationService';
import { Notification } from '../model/Notification';

export class NotificationService implements INotificationService {
  send(notification: Notification) {
    console.log(
      `[${notification.type}] to ${notification.toId}: ${notification.msg}`
    );
  }
}
