import {
  CLEARED_LAND,
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "./constant";
import { isLocationValid, parseFile, parseMap, updateMapTile } from "./helper";
import { SiteMap } from "./site";
import { Location } from "./bulldozer";

test("Validate bulldozer location", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [REMOVABLE_TREE, PRESERVED_TREE],
  ];
  const safe: Location = [0, 0];
  const beyondBoundary: Location = [1, 2];
  const atPreservedTree: Location = [1, 0];
  expect(isLocationValid(safe, null)).toBe(false);
  expect(isLocationValid(safe, map)).toBe(true);
  expect(isLocationValid(beyondBoundary, map)).toBe(false);
  expect(isLocationValid(atPreservedTree, map)).toBe(false);
});

test("Parse file", async () => {
  const file = new File(["ooo"], "a.txt");
  const result = await parseFile(file);
  expect(result).toEqual("ooo");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await expect(parseFile(null as any)).rejects.toThrow();
});

test("Parse map from string", () => {
  expect(parseMap("oTo\n\n")).toEqual([["o", "T", "o"]]);
  expect(parseMap("o\nt\n")).toEqual([["o"], ["t"]]);
  expect(parseMap("r")).toEqual([["r"]]);
  expect(() => parseMap(" \n")).toThrow();
  expect(() => parseMap("a")).toThrow();
  expect(() => parseMap("o\noo")).toThrow();
});

test("Update map tile", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [REMOVABLE_TREE, PRESERVED_TREE],
  ];
  const newMap = updateMapTile(map, CLEARED_LAND, 1, 0);
  expect(newMap).toEqual([
    [PLAIN_LAND, ROCKY_LAND],
    [CLEARED_LAND, PRESERVED_TREE],
  ]);
});
