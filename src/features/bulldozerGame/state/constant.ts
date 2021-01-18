import { Direction, Rotation } from "./bulldozer";

export const DIRECTION_NORTH: Direction = [0, 1];
export const DIRECTION_SOUTH: Direction = [0, -1];
export const DIRECTION_EAST: Direction = [1, 0];
export const DIRECTION_WEST: Direction = [-1, 0];

// Rotation: refer to https://en.wikipedia.org/wiki/Rotation_matrix#Common_rotations
export const ROTATION_LEFT: Rotation = [
  [0, 1],
  [-1, 0],
];

export const ROTATION_RIGHT: Rotation = [
  [0, -1],
  [1, 0],
];

export enum Terrain {
  PlainLand = "o",
  RockyLand = "r",
  RemovableTree = "t",
  ProtectedTree = "T",
  ClearedLand = "c",
}

export enum GameStatus {
  Starting,
  Started,
  Error,
  Ended,
}

export enum Command {
  Advance,
  Left,
  Right,
  Quit,
}
