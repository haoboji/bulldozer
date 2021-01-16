import {
  CLEARED_LAND,
  PLAIN_LAND,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "../features/bulldozerGame/constant";

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
};
