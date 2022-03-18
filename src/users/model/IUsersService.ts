import { User } from './User';

export interface IUsersService {
  findById(id: User['id']): User;
}
