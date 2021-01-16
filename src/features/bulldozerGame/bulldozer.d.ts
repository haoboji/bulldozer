export type Location = [number, number];

export type Direction = [number, number];

export type Rotation = [[number, number], [number, number]];

export interface Bulldozer {
  location: Location;
  direction: Direction;
}
