import { Don } from '../don/Don';

import { VeterinaireRepository } from './VeterinaireRepository';

export class Veterinaire {
  constructor(private _id: string, private _assigned: Don = null) {}

  get id() {
    return this._id;
  }

  get assigned() {
    return this._assigned;
  }

  public assignDon(don: Don, veterinaires: VeterinaireRepository): void {
    this._assigned = don;
    veterinaires.save(this);
  }

  public unAssignDon(veterinaires: VeterinaireRepository): void {
    this._assigned = null;
    veterinaires.save(this);
  }
}
