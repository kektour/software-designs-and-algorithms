export class Point {
  public x: number;
  public y: number;

  constructor();
  constructor(x: number, y: number);

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(x: number, y: number): number;
  public distance(other: Point): number;

  public distance(x: number | Point = 0, y: number = 0): number {
    let secondPointX!: number;
    let secondPointY!: number;

    if (typeof x === "number" && typeof y === "number") {
      secondPointX = x;
      secondPointY = y;
    }

    if (x instanceof Point) {
      secondPointX = x.x;
      secondPointY = x.y;
    }

    return Number(Math.sqrt(Math.pow(secondPointX - this.x, 2) + Math.pow(secondPointY - this.y, 2)).toFixed(3));
  }
}
