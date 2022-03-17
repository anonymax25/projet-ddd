import { AnimalType } from './AnimalType';

export class Animal {
  private _id: string;
  private _type: AnimalType;

  get id(): string {
    return this._id;
  }

  get type(): AnimalType {
    return this._type;
  }
}
