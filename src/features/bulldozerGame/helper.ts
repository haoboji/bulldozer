import { Location } from "./bulldozer";
import { PRESERVED_TREE } from "./constant";
import { SiteMap } from "./site";

export const isLocationValid = (
  location: Location,
  map: SiteMap | null
): boolean => {
  const [x, y] = location;
  // Validate boundaries
  if (map?.[y]?.[x] === undefined) {
    return false;
  }
  // Validate protected tree
  if (map[y][x] === PRESERVED_TREE) {
    return false;
  }
  return true;
};
