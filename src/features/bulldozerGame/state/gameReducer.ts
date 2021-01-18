import {
  ADVANCE_BULLDOZER,
  BulldozerGameAction,
  END_SIMULATION,
  ROTATE_BULLDOZER,
  SET_SITE_MAP,
} from "./actionTypes";
import { Bulldozer, Location } from "./bulldozer";
import {
  CLEARED_LAND,
  Command,
  DIRECTION_EAST,
  GameStatus,
  PRESERVED_TREE,
  ROTATION_RIGHT,
} from "./constant";
import { SiteMap, Terrain } from "./site";
import { add, multiply } from "mathjs";
import { isLocationValid, updateMapTile } from "./helper";
import { Activity } from "./report";
import config from "../../../app/config";

export interface GameState {
  map: SiteMap | null;
  status: GameStatus;
  bulldozer: Bulldozer;
  commands: Command[];
  activities: Activity[];
  totalCost: number;
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
  totalCost: 0,
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
      const { activities, bulldozer, map, commands, totalCost } = state;
      if (!map) {
        return state;
      }
      const { location, direction } = bulldozer;
      const newLocation = add(location, direction) as Location;
      const [x, y] = newLocation;
      const terrain: Terrain | undefined = map[-y]?.[x];
      const isValidMove = isLocationValid(newLocation, state.map);
      const newStatus = isValidMove ? GameStatus.Started : GameStatus.Error;
      // Mark target tile to cleared
      const newMap =
        isValidMove && terrain !== CLEARED_LAND
          ? updateMapTile(map, CLEARED_LAND, -y, x)
          : map;
      // Log commands
      const newCommands = [...commands, Command.Advance];
      // Log activity
      const newActivity = isValidMove &&
        terrain &&
        terrain !== PRESERVED_TREE && {
          terrain,
          location: newLocation,
        };
      const newActivities = newActivity
        ? [...activities, newActivity]
        : activities;
      // Cache total cost
      const newTotalCost = newActivity
        ? totalCost +
          config.fuelUsage[newActivity.terrain] * config.itemCost.fuel
        : totalCost;

      return {
        ...state,
        status: newStatus,
        map: newMap,
        activities: newActivities,
        commands: newCommands,
        totalCost: newTotalCost,
        bulldozer: { ...bulldozer, location: newLocation },
      };
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
      const { commands } = state;
      return {
        ...state,
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
