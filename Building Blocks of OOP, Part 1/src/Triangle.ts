import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(pointA: Point, pointB: Point, pointC: Point);
  constructor(pointA: Point, pointB: Point, pointC: Point, color: string, filled: boolean);

  constructor(pointA: Point, pointB: Point, pointC: Point, color?: string, filled?: boolean) {
    const points = [pointA, pointB, pointC];

    if (color && filled) {
      super(points, color, filled);
    } else {
      super(points);
    }
  }

  public toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }

  public getType(): string {
    const [pointA, pointB, pointC] = this.points;

    const distanceAB = pointA.distance(pointB);
    const distanceBC = pointB.distance(pointC);
    const distanceCA = pointC.distance(pointA);

    if (distanceAB === distanceBC && distanceBC === distanceCA) {
      return "equilateral triangle";
    }

    if (distanceAB === distanceBC || distanceAB === distanceCA || distanceBC === distanceCA) {
      return "isosceles triangle";
    }

    return "scalene triangle";
  }
}
