import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  private static readonly MAX_DURABILITY_MODIFIER: number = 1;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const effectiveDurability = this.getEffectiveDurability();

    if (effectiveDurability < Bow.MAX_DURABILITY_MODIFIER) {
      this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
    }

    if (effectiveDurability > Bow.MAX_DURABILITY_MODIFIER) {
      this.durabilityModifier = Bow.MAX_DURABILITY_MODIFIER;
    }
  }
}
