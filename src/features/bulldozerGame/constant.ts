import { Direction, Rotation } from "./bulldozer";

export const PLAIN_LAND = "o";
export const ROCKY_LAND = "r";
export const REMOVABLE_TREE = "t";
export const PRESERVED_TREE = "T";

export const DIRECTION_NORTH: Direction = [0, 1];
export const DIRECTION_SOUTH: Direction = [0, -1];
export const DIRECTION_EAST: Direction = [1, 0];
export const DIRECTION_WEST: Direction = [-1, 0];

export const ROTATION_LEFT: Rotation = [
  [0, 1],
  [-1, 0],
];

export const ROTATION_RIGHT: Rotation = [
  [0, -1],
  [1, 0],
];

export enum GameStatus {
  Starting,
  Started,
  Error,
  Ended,
}
