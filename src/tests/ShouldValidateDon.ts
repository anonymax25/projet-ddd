import test from 'ava';

import { NotificationService } from '../notifications/infrastructure/NotificationService';
import { DonRepository } from '../validation/model/don/DonRepository';
import { VeterinaireRepository } from '../validation/model/veterinaire/VeterinaireRepository';
import { ValiderDon } from '../validation/use_case/don/ValiderDon';

import { FakeDons } from './_FakeDons';
import { FakeVeterinaires } from './_FakeVeterinaires';

let dons: DonRepository;
let veterinaires: VeterinaireRepository;
let notifs: NotificationService;

let validation: ValiderDon;

const getDon = () => {
  return dons.findById('0');
};

test.before((t) => {
  dons = new FakeDons();
  veterinaires = new FakeVeterinaires();
  notifs = new NotificationService();
});

test('Should find and send validation to a vet', (t) => {
  validation = new ValiderDon(dons, veterinaires, notifs);
  validation.envoiValidationDon(getDon().id);

  t.false(getDon().validated);
});

test('Should save the response of the vet', (t) => {
  const assignedVeterinaire = veterinaires.findByAssigned(getDon());
  validation.reponseValidationDon(getDon().id, assignedVeterinaire.id, true);

  t.true(getDon().validated);
  t.is(getDon().veterinaire.id, assignedVeterinaire.id);
  t.is(veterinaires.findById(assignedVeterinaire.id).assigned, null);
});
