import { Veterinaire } from './Veterinaire';

export interface VeterinaireRepository {
  update(vet: Veterinaire): Veterinaire;
  findById(id: string): Veterinaire;
  findOneAvailable(): Veterinaire;
}
