import { Don } from '../don/Don';

import { Veterinaire } from './Veterinaire';

export interface VeterinaireRepository {
  findById(id: string): Veterinaire;
  findByAssigned(don: Don): Veterinaire;
  save(vet: Veterinaire): void;
  findOneAvailable(): Veterinaire;
}
