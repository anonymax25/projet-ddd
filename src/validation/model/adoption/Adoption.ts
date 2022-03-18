import { Animal } from "../don/Animal";
import { Veterinaire } from "../veterinaire/Veterinaire";

export class Adoption {
  constructor(
    private _id: string,
    private _animal: Animal,
    private _created: Date,
    private _validated?: boolean,
    private _veterinaire?: Veterinaire
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

}
