import { Point } from "./Point";

export abstract class Shape {
  protected points: Array<Point>;
  protected color: string;
  protected filled: boolean;

  constructor(points: Array<Point>);
  constructor(points: Array<Point>, color: string, filled: boolean);

  constructor(points: Array<Point>, color: string = "green", filled: boolean = true) {
    if (points.length < 3) {
      throw new Error("At least 3 points allowed");
    }

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  abstract getType(): string;

  public toString(): string {
    const filledStr = this.filled ? "filled" : "not filled";
    const pointListStr = this.points.reduce((str, point) => {
      if (str.length) {
        return `${str}, ${point.toString()}`;
      }

      return point.toString();
    }, "");

    return `A Shape with color of ${this.color} and ${filledStr}. Points: ${pointListStr}.`;
  }

  public getPerimeter(): number {
    let perimeter: number = 0;

    for (let i = 0; i < this.points.length; i++) {
      const currPoint = this.points[i];
      const nextPoint = this.points[i + 1] instanceof Point ? this.points[i + 1] : this.points[0];

      perimeter += currPoint.distance(nextPoint);
    }

    return perimeter;
  }
}
