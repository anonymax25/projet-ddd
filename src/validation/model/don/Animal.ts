import { AnimalType } from './AnimalType';

export class Animal {
  constructor(
    private _id: string,
    private _type: AnimalType,
    private _name: string
  ) {}

  get id(): string {
    return this._id;
  }

  get type(): AnimalType {
    return this._type;
  }

  get name(): string {
    return this._name;
  }
}
