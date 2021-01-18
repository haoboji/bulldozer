import { Terrain } from "./constant";
import { isLocationValid, parseFile, parseMap, updateMapTile } from "./helper";
import { Location, SiteMap } from "./bulldozer";

test("Validate bulldozer location", () => {
  const map: SiteMap = [
    [Terrain.PlainLand, Terrain.RockyLand],
    [Terrain.RemovableTree, Terrain.ProtectedTree],
  ];
  const safe: Location = [0, 0];
  const beyondBoundary: Location = [1, 2];
  const atPreservedTree: Location = [1, -1];
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
    [Terrain.PlainLand, Terrain.RockyLand],
    [Terrain.RemovableTree, Terrain.ProtectedTree],
  ];
  const newMap = updateMapTile(map, Terrain.ClearedLand, 1, 0);
  expect(newMap).toEqual([
    [Terrain.PlainLand, Terrain.RockyLand],
    [Terrain.ClearedLand, Terrain.ProtectedTree],
  ]);
});
