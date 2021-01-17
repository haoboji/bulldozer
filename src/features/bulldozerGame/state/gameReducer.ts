import {
  ADVANCE_BULLDOZER,
  BulldozerGameAction,
  END_SIMULATION,
  ROTATE_BULLDOZER,
  SET_SITE_MAP,
} from "./actionTypes";
import { Bulldozer, Location } from "./bulldozer";
import {
  Command,
  DIRECTION_EAST,
  GameStatus,
  ROTATION_RIGHT,
} from "./constant";
import { SiteMap } from "./site";
import { add, multiply } from "mathjs";
import { isLocationValid } from "./helper";
import { Activity } from "./report";

export interface GameState {
  map: SiteMap | null;
  status: GameStatus;
  bulldozer: Bulldozer;
  commands: Command[];
  activities: Activity[];
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

const game = (
  state = initialGameState,
  action: BulldozerGameAction
): GameState => {
  switch (action.type) {
    case SET_SITE_MAP: {
      return {
        ...state,
        map: action.map,
        bulldozer: {
          location: [-1, action.map.length - 1],
          direction: DIRECTION_EAST,
        },
      };
    }
    case ADVANCE_BULLDOZER: {
      const { activities, bulldozer, map, commands } = state;
      const { location, direction } = bulldozer;
      const newLocation = add(location, direction) as Location;
      const [x, y] = newLocation;
      const terrain = map?.[map.length - y - 1]?.[x];
      const newActivities = terrain
        ? [
            ...activities,
            {
              terrain,
              location: newLocation,
            },
          ]
        : activities;
      const status = isLocationValid(newLocation, state.map)
        ? state.status
        : GameStatus.Error;
      return {
        ...state,
        status,
        activities: newActivities,
        commands: [...commands, Command.Advance],
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
