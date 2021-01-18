import { Location, Map } from "./bulldozer";
import { Terrain } from "./constant";

export const isLocationValid = (
  location: Location,
  map: Map | null
): boolean => {
  const [x, y] = location;
  // Validate boundaries
  if (map?.[-y]?.[x] === undefined) {
    return false;
  }
  // Validate protected tree
  if (map[-y][x] === Terrain.ProtectedTree) {
    return false;
  }
  return true;
};

export const updateMapTile = (
  map: Map,
  terrain: Terrain,
  rowIndex: number,
  colIndex: number
): Map => {
  const row = map[rowIndex];
  const newRow = [
    ...row.slice(0, colIndex),
    terrain,
    ...row.slice(colIndex + 1),
  ];
  return [...map.slice(0, rowIndex), newRow, ...map.slice(rowIndex + 1)];
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

export const parseMap = (content: string): Map => {
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
          t !== Terrain.ProtectedTree &&
          t !== Terrain.RemovableTree &&
          t !== Terrain.RockyLand &&
          t !== Terrain.PlainLand
      )
  );
  if (invalidTile) {
    throw Error("Invalid map tile");
  }
  return rawMap as Map;
};
