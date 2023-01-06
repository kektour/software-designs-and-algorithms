import { Item } from "./Item";

export class Weapon extends Item {
  protected static readonly MODIFIER_CHANGE_RATE: number = 0.05;

  protected durabilityModifier: number = 0;
  protected damageModifier: number = 0;

  private baseDamage: number;
  private baseDurability: number;
  private effectiveDurability: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;

    this.effectiveDurability = this.baseDurability + this.durabilityModifier;
  }

  public getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getEffectiveDurability(): number;
  public getEffectiveDurability(durabilityModifier: number): number;
  public getEffectiveDurability(durabilityModifier?: number): number {
    const modifierToUseInCalc = typeof durabilityModifier === "number" ? durabilityModifier : this.durabilityModifier;
    const finalDurability = this.baseDurability + modifierToUseInCalc;

    if (finalDurability <= 0) {
      return 0;
    }

    return finalDurability;
  }

  public use(): string {
    if (this._isBroken()) {
      return `You can't use the ${this.name}, it is broken.`;
    }

    const useResultMessage = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;

    this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;

    if (this._isBroken()) {
      return useResultMessage + "\n" + `The ${this.name} breaks.`;
    }

    return useResultMessage;
  }

  public toString(): string {
    return `${super.toString()}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.getEffectiveDurability() * 100).toFixed(2)}%`;
  }

  private _isBroken(): boolean {
    return this.baseDurability + this.durabilityModifier <= 0;
  }
}
