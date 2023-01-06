import { Comparable } from "./Comparable";

export class Item implements Comparable<Item> {
  private static readonly ID_START_POINT: number = 0;
  private static ID_CURSOR: number = Item.ID_START_POINT;

  private readonly id: number;

  public readonly name: string;
  public value: number;
  public weight: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;

    this.id = Item.ID_CURSOR + 1;
    Item.ID_CURSOR = this.id;
  }

  public static resetIdCounter() {
    Item.ID_CURSOR = Item.ID_START_POINT;
  }

  public getId(): number {
    return this.id;
  }

  public compareTo(other: Item): number {
    if (this.value > other.value) {
      return 1;
    }

    if (this.value < other.value) {
      return -1;
    }

    const lowerName = this.name.toLowerCase();
    const otherLowerName = other.name.toLowerCase();

    if (lowerName > otherLowerName) {
      return 1;
    }

    if (lowerName < otherLowerName) {
      return -1;
    }

    return 0;
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }
}
