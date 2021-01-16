import {
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "./constant";
import { isLocationValid } from "./helper";
import { SiteMap } from "./site";
import { Location } from "./bulldozer";

test("Validate bulldozer location", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [REMOVABLE_TREE, PRESERVED_TREE],
  ];
  const safe: Location = [0, 0];
  const beyondBoundary: Location = [1, 2];
  const atPreservedTree: Location = [1, 1];
  expect(isLocationValid(safe, null)).toBe(false);
  expect(isLocationValid(safe, map)).toBe(true);
  expect(isLocationValid(beyondBoundary, map)).toBe(false);
  expect(isLocationValid(atPreservedTree, map)).toBe(false);
});
