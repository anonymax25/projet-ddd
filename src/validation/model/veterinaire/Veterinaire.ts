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

  public assignDon(don: Don): void {
    this._assigned = don;
  }

  public unAssignDon(): void {
    this._assigned = null;
  }
}
