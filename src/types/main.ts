export enum Direction {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// Same directions as CSS order
export const directions = [
  Direction.UP,
  Direction.RIGHT,
  Direction.DOWN,
  Direction.LEFT,
];

export const directionsToCalculationMap = {};

export interface Coordinates {
  x: number;
  y: number;
}
