import { Item } from "./Item";

export class Consumable extends Item {
  private _isConsumed: boolean = false;
  private _isSpoiled: boolean;

  constructor(name: string, value: number, weight: number);
  constructor(name: string, value: number, weight: number, isSpoiled: boolean);
  constructor(name: string, value: number, weight: number, isSpoiled: boolean = false) {
    super(name, value, weight);

    this._isSpoiled = isSpoiled;
  }

  set isConsumed(value: boolean) {
    this._isConsumed = value;
  }

  public isSpoiled(): boolean {
    return this._isSpoiled;
  }

  public use(): string {
    if (this._isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    }

    this._isConsumed = true;

    const useResultMessage = `You consumed the ${this.name}.`;

    if (this._isSpoiled) {
      return useResultMessage + "\n" + "You feel sick.";
    } else {
      return useResultMessage;
    }
  }
}
