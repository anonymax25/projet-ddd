export class NotificationService {
  notifications: Notification[];

  readAll(): Notification[] {
    return notification;
  }

  push(notification: Notification) {
    this.notifications.push(notification);
  }
}
