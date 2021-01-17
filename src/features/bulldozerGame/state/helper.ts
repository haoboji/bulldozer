import { Location } from "./bulldozer";
import {
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "./constant";
import { SiteMap } from "./site";

export const isLocationValid = (
  location: Location,
  map: SiteMap | null
): boolean => {
  const [x, y] = location;
  // Validate boundaries
  if (map?.[map.length - y - 1]?.[x] === undefined) {
    return false;
  }
  // Validate protected tree
  if (map[map.length - y - 1][x] === PRESERVED_TREE) {
    return false;
  }
  return true;
};

export const parseFile = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = () => {
      reject(Error("Invalid file"));
    };
    fileReader.readAsText(file);
  });

export const parseMap = (content: string): SiteMap => {
  const trimmed = content.trim();
  if (trimmed.length === 0) {
    throw Error("Empty map");
  }
  const rawMap = trimmed.split("\n").map((row) => row.split(""));
  const abnormalRow = rawMap.find((r) => r.length !== rawMap[0].length);
  if (abnormalRow) {
    throw Error("Invalid map shape");
  }
  const invalidTile = rawMap.find(
    (row) =>
      !!row.find(
        (t) =>
          t !== PRESERVED_TREE &&
          t !== REMOVABLE_TREE &&
          t !== ROCKY_LAND &&
          t !== PLAIN_LAND
      )
  );
  if (invalidTile) {
    throw Error("Invalid map tile");
  }
  return rawMap as SiteMap;
};
