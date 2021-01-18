import { Terrain } from "./constant";

// Location: first number indicate x axis, second number indicate y axis
export type Location = [number, number];

// Direction: first number indicate x axis, second number indicate y axis
export type Direction = [number, number];

// Rotation: refer to https://en.wikipedia.org/wiki/Rotation_matrix
export type Rotation = [[number, number], [number, number]];

export interface Bulldozer {
  location: Location;
  direction: Direction;
}

export type Map = Terrain[][];

export interface Activity {
  terrain: Terrain;
  location: Location;
}
