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
  veterinaires = new FakeVeterinaires();
  notifications = new NotificationService(users);
});

test('Should find and send validation to a vet', (t) => {
  validation = new ValiderDon(dons, veterinaires, notifications);
  t.is(veterinaires.findAll().filter((vet) => vet.assigned).length, 0);
  validation.envoiValidationDon({ donId: getDon().id });

  t.is(veterinaires.findAll().filter((vet) => vet.assigned).length, 1);
  t.false(getDon().validated);
});

test('Should save the response of the vet', (t) => {
  const assignedVeterinaire = veterinaires.findByAssigned(getDon());
  validation.reponseValidationDon({
    donId: getDon().id,
    veterinaireId: assignedVeterinaire.id,
    response: true,
  });

  t.true(getDon().validated);
  t.is(getDon().veterinaire.id, assignedVeterinaire.id);
  t.is(veterinaires.findById(assignedVeterinaire.id).assigned, null);
});
