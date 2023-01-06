import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    const itemsClone = [...this.items];

    if (typeof comparator !== "undefined") {
      this.items = itemsClone.sort((a, b) => comparator.compare(a, b));
    } else {
      this.items = itemsClone.sort((a, b) => a.compareTo(b));
    }
  }

  public toString(): string {
    return this.items.join(", ");
  }
}
