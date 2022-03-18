import * as faker from 'faker';

import { Animal } from '../validation/model/don/Animal';
import { AnimalType } from '../validation/model/don/AnimalType';
import { Don } from '../validation/model/don/Don';
import { DonRepository } from '../validation/model/don/DonRepository';

export class FakeDons implements DonRepository {
  dons: Map<string, Don>;
  animals: Map<string, Animal>;

  constructor() {
    this.animals = new Map();
    this.dons = new Map();
    for (let i = 0; i < 4; i++) {
      this.animals.set(
        i.toString(),
        new Animal(i.toString(), AnimalType.CAT, faker.name.findName())
      );
    }
    for (let i = 0; i < 4; i++) {
      const don = new Don(
        i.toString(),
        this.animals.get(i.toString()),
        new Date(),
        false,
        null
      );
      this.dons.set(i.toString(), don);
    }
  }

  findById(id: string): Don {
    const don = this.dons.get(id);
    if (!don) throw new Error(`No don with id: ${id}`);
    return don;
  }

  save(don: Don): void {
    this.dons.set(don.id, don);
  }
}
