import {
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "./constant";

export type Terrain =
  | typeof PLAIN_LAND
  | typeof ROCKY_LAND
  | typeof REMOVABLE_TREE
  | typeof PRESERVED_TREE;

export type SiteMap = Terrain[][];
