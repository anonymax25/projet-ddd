import { Don } from './Don';

export interface DonRepository {
  findById(id: string): Don;
}
