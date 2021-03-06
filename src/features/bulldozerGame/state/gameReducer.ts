import {
  ADVANCE_BULLDOZER,
  BulldozerGameAction,
  END_SIMULATION,
  ROTATE_BULLDOZER,
  SET_SITE_MAP,
} from "./actionTypes";
import { Activity, Bulldozer, Location, Map } from "./bulldozer";
import {
  Command,
  DIRECTION_EAST,
  GameStatus,
  ROTATION_RIGHT,
  Terrain,
} from "./constant";
import { add, multiply } from "mathjs";
import {
  calculateUnclearedCost,
  isLocationValid,
  updateMapTile,
} from "./helper";
import config from "../../../app/config";

export interface GameState {
  map: Map | null;
  status: GameStatus;
  bulldozer: Bulldozer;
  commands: Command[];
  activities: Activity[];
  unclearedCost?: number;
  totalCost?: number;
}

const initialBulldozer: Bulldozer = {
  location: [-1, 0],
  direction: DIRECTION_EAST,
};

export const initialGameState: GameState = {
  map: null,
  bulldozer: initialBulldozer,
  status: GameStatus.Starting,
  commands: [],
  activities: [],
};

const advanceBulldozer = (state: GameState) => {
  const { bulldozer, map } = state;
  if (!map) {
    return state;
  }
  const { activities, commands, totalCost, unclearedCost } = state;
  const { location, direction } = bulldozer;
  const newLocation = add(location, direction) as Location;
  const [x, y] = newLocation;
  const terrain: Terrain | undefined = map[-y]?.[x];
  const isValidMove = isLocationValid(newLocation, state.map);
  const newStatus = isValidMove ? GameStatus.Started : GameStatus.Error;
  // Mark target tile to cleared
  const newMap =
    isValidMove && terrain !== Terrain.ClearedLand
      ? updateMapTile(map, Terrain.ClearedLand, -y, x)
      : map;
  // Log commands
  const newCommands = [...commands, Command.Advance];
  // Log activity
  const newActivity = isValidMove &&
    terrain &&
    terrain !== Terrain.ProtectedTree && {
      terrain,
      location: newLocation,
    };
  const newActivities = newActivity ? [...activities, newActivity] : activities;
  // Calculate uncleared cost
  const newUnclearedCost = isValidMove
    ? unclearedCost
    : calculateUnclearedCost(map);
  // Cache total cost
  const addedActivityCost = newActivity
    ? config.fuelUsage[newActivity.terrain] * config.itemCost.fuel
    : 0;
  const newTotalCost =
    (totalCost || 0) + (addedActivityCost || 0) + (newUnclearedCost || 0);

  return {
    ...state,
    status: newStatus,
    map: newMap,
    activities: newActivities,
    commands: newCommands,
    totalCost: newTotalCost,
    unclearedCost: newUnclearedCost,
    bulldozer: { ...bulldozer, location: newLocation },
  };
};

const game = (
  state = initialGameState,
  action: BulldozerGameAction
): GameState => {
  switch (action.type) {
    case SET_SITE_MAP: {
      return { ...state, map: action.map };
    }
    case ADVANCE_BULLDOZER: {
      return advanceBulldozer(state);
    }
    case ROTATE_BULLDOZER: {
      const { commands, bulldozer } = state;
      const { direction } = bulldozer;
      const { rotation } = action;
      const newDirection = multiply(direction, rotation);
      const command =
        rotation === ROTATION_RIGHT ? Command.Right : Command.Left;
      return {
        ...state,
        commands: [...commands, command],
        bulldozer: { ...bulldozer, direction: newDirection },
      };
    }
    case END_SIMULATION: {
      const { commands, totalCost } = state;
      const unclearedCost = calculateUnclearedCost(state.map || []);
      return {
        ...state,
        unclearedCost,
        totalCost: (totalCost || 0) + unclearedCost,
        commands: [...commands, Command.Quit],
        status: GameStatus.Ended,
      };
    }
    default: {
      return state;
    }
  }
};

export default game;
