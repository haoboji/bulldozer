import {
  CLEARED_LAND,
  Command,
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "../features/bulldozerGame/state/constant";

export default {
  fuelUsage: {
    [PLAIN_LAND]: 1,
    [CLEARED_LAND]: 1,
    [ROCKY_LAND]: 2,
    [REMOVABLE_TREE]: 2,
  },
  itemCost: {
    fuel: 1,
    uncleard: 3,
  },
  terrainName: {
    [PLAIN_LAND]: "Plain Land",
    [CLEARED_LAND]: "Cleared Land",
    [ROCKY_LAND]: "Rocky Land",
    [REMOVABLE_TREE]: "Removable Tree",
    [PRESERVED_TREE]: "Preserved Tree",
  },
  activityName: {
    [PLAIN_LAND]: "Clearing plain land",
    [CLEARED_LAND]: "Visiting cleared land",
    [ROCKY_LAND]: "Clearing rocky land",
    [REMOVABLE_TREE]: "Clearing land containing a tree",
  },
  commandName: {
    [Command.Advance]: "Advance",
    [Command.Right]: "Right",
    [Command.Left]: "Left",
    [Command.Quit]: "Quit",
  },
};
