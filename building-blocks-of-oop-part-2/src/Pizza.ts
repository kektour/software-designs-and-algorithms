import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private readonly _numberOfSlices: number;
  private _numberOfEatenSlices: number = 0;

  constructor(value: number, weight: number, isSpoiled: boolean, numberOfSlices: number) {
    super("pizza", value, weight, isSpoiled);

    this._numberOfSlices = numberOfSlices;
  }

  get numberOfSlices(): number {
    return this._numberOfSlices;
  }

  public use(): string {
    if (this._numberOfEatenSlices === this._numberOfSlices) {
      return "There's nothing left of the pizza to consume.";
    }

    this._numberOfEatenSlices += 1;

    return "You consumed a slice of the pizza.";
  }

  public getNumberOfEatenSlices(): number {
    return this._numberOfEatenSlices;
  }
}
