import { Veterinaire } from '../veterinaire/Veterinaire';

import { Animal } from './Animal';

export class Don {
  constructor(
    private _id: string,
    private _animal: Animal,
    private _created: Date,
    private _validated: boolean | null,
    private _veterinaire: Veterinaire
  ) {}

  get id(): string {
    return this._id;
  }

  get animal(): Animal {
    return this._animal;
  }

  get created(): Date {
    return this._created;
  }

  get validated(): boolean {
    return this._validated;
  }

  get veterinaire(): Veterinaire {
    return this._veterinaire;
  }

  public validate(response: boolean, veterinaire: Veterinaire): void {
    this._validated = response;
    this._veterinaire = veterinaire;
  }
}
