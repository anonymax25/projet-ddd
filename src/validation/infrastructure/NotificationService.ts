import { INotificationService } from '../../notifications/model/INotificationService';
import { Notification } from '../../notifications/model/Notification';
import { UsersService } from '../../users/infrastructure/UsersService';

export class NotificationService implements INotificationService {
  constructor(private userService: UsersService) {}

  send<T>(notification: Notification<T>) {
    const user = this.userService.findById(notification.toId);
    console.log(`[${notification.type}] to ${user.role}: ${notification.msg}`);
  }
}
