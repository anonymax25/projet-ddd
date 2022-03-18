import { UsersService } from '../../users/infrastructure/UsersService';
import { INotificationService } from '../model/INotificationService';
import { Notification } from '../model/Notification';

export class NotificationService implements INotificationService {

  constructor(private userService: UsersService) {}

  send<T>(notification: Notification<T>) {
    const user = this.userService.findById(notification.toId);
    console.log(`[${notification.type}] to ${user.role}: ${notification.msg}`);
  }
}
