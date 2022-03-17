import { Animal } from './Animal';

export class Don {
  private _id: string;
  private _animal: Animal;
  private _created: Date;

  get id(): string {
    return this._id;
  }

  get animal(): Animal {
    return this._animal;
  }

  get created(): Date {
    return this._created;
  }
}
