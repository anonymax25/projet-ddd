import { Veterinaire } from './Veterinaire';

export interface VeterinaireRepository {
  findById(id: string): Veterinaire;
  save(vet: Veterinaire): void;
  findOneAvailable(): Veterinaire;
}
