import { Terrain, Command } from "../features/bulldozerGame/state/constant";

export default {
  fuelUsage: {
    [Terrain.PlainLand]: 1,
    [Terrain.ClearedLand]: 1,
    [Terrain.RockyLand]: 2,
    [Terrain.RemovableTree]: 2,
  },
  itemCost: {
    fuel: 1,
    uncleard: 3,
  },
  terrainName: {
    [Terrain.PlainLand]: "Plain Land",
    [Terrain.ClearedLand]: "Cleared Land",
    [Terrain.RockyLand]: "Rocky Land",
    [Terrain.RemovableTree]: "Removable Tree",
    [Terrain.ProtectedTree]: "Preserved Tree",
  },
  activityName: {
    [Terrain.PlainLand]: "Clearing plain land",
    [Terrain.ClearedLand]: "Visiting cleared land",
    [Terrain.RockyLand]: "Clearing rocky land",
    [Terrain.RemovableTree]: "Clearing land containing a tree",
    [Terrain.ProtectedTree]: "Attempting to remove protected tree",
  },
  commandName: {
    [Command.Advance]: "Advance",
    [Command.Right]: "Right",
    [Command.Left]: "Left",
    [Command.Quit]: "Quit",
  },
};
