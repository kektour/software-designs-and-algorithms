import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    if (first.weight > second.weight) {
      return 1;
    }

    if (first.weight < second.weight) {
      return -1;
    }

    return first.compareTo(second);
  }
}
