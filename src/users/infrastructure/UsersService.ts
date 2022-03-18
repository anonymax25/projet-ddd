import * as faker from 'faker';

import { IUsersService } from '../model/IUsersService';
import { User } from '../model/User';

export class UsersService implements IUsersService {
  findById(id: string): User {
    return {
      id,
      name: faker.name.findName(),
      role: +id === 4 ? 'OWNER' : 'VETERINAIRE',
    };
  }
}
