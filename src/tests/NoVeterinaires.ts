import test from 'ava';

import { UsersService } from '../users/infrastructure/UsersService';
import { NotificationService } from '../validation/infrastructure/NotificationService';
import { DonRepository } from '../validation/model/don/DonRepository';
import { VeterinaireRepository } from '../validation/model/veterinaire/VeterinaireRepository';
import { ValiderDon } from '../validation/use_case/don/ValiderDon';

import { FakeDons } from './_FakeDons';
import { FakeVeterinaires } from './_FakeVeterinaires';

let dons: DonRepository;
let veterinaires: VeterinaireRepository;
let notifications: NotificationService;
let users: UsersService;

let validation: ValiderDon;

const getDon = () => {
  return dons.findById('0');
};

test.before((t) => {
  dons = new FakeDons();
  users = new UsersService();
  veterinaires = new FakeVeterinaires(0);
  notifications = new NotificationService(users);
});

test('Should not find a vet', (t) => {
  validation = new ValiderDon(dons, veterinaires, notifications);
  try {
    validation.envoiValidationDon(getDon().id);
  } catch (e) {
    t.is(e.message, 'No veterinaire available');
  }
});
