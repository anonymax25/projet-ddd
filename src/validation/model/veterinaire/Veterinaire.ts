import { Don } from '../don/Don';

import { VeterinaireRepository } from './VeterinaireRepository';

export class Veterinaire {
  private _id: string;
  private _assigned?: Don;

  get id() {
    return this._id;
  }

  get assigned() {
    return this._assigned;
  }

  assignDon(don: Don, veterinaires: VeterinaireRepository): void {
    this._assigned = don;
    veterinaires.update(this);
  }
}
