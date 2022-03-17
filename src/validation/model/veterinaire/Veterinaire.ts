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

  public assignDon(don: Don, veterinaires: VeterinaireRepository): Veterinaire {
    this._assigned = don;
    return veterinaires.save(this);
  }

  public unAssignDon(veterinaires: VeterinaireRepository): Veterinaire {
    this._assigned = null;
    return veterinaires.save(this);
  }
}
