import { Veterinaire } from '../validation/model/veterinaire/Veterinaire';
import { VeterinaireRepository } from '../validation/model/veterinaire/VeterinaireRepository';

export class FakeVeterinaires implements VeterinaireRepository {
  veterinaires: Map<string, Veterinaire>;

  constructor() {
    this.veterinaires = new Map();
    for (let i = 0; i < 4; i++) {
      const veterinaire = new Veterinaire(i.toString());
      this.veterinaires.set(i.toString(), veterinaire);
    }
  }

  findById(id: string): Veterinaire {
    const veterinaire = this.veterinaires.get(id);
    if (!veterinaire) throw new Error(`No veterinaire with id: ${id}`);
    return veterinaire;
  }

  save(veterinaire: Veterinaire): void {
    this.veterinaires.set(veterinaire.id, veterinaire);
  }

  findOneAvailable(): Veterinaire {
    this.veterinaires.forEach((vet) => {
      if (vet.assigned === null) return vet;
    });
    throw new Error('No veterinaire available');
  }
}
