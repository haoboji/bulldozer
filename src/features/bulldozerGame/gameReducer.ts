import {
  ADVANCE_BULLDOZER,
  BulldozerGameAction,
  END_SIMULATION,
  ROTATE_BULLDOZER,
  SET_SITE_MAP,
} from "./actionTypes";
import { Bulldozer, Location } from "./bulldozer";
import { DIRECTION_EAST, GameStatus } from "./constant";
import { SiteMap } from "./site";
import { add, multiply } from "mathjs";

export interface GameState {
  map: SiteMap | null;
  status: GameStatus;
  bulldozer: Bulldozer;
}

const initialBulldozer: Bulldozer = {
  location: [0, -1],
  direction: DIRECTION_EAST,
};

export const initialGameState: GameState = {
  map: null,
  bulldozer: initialBulldozer,
  status: GameStatus.Starting,
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
      const { location, direction } = state.bulldozer;
      const newLocation = add(location, direction) as Location;
      return {
        ...state,
        bulldozer: { ...state.bulldozer, location: newLocation },
      };
    }
    case ROTATE_BULLDOZER: {
      const { direction } = state.bulldozer;
      const { rotation } = action;
      const newDirection = multiply(direction, rotation);
      return {
        ...state,
        bulldozer: { ...state.bulldozer, direction: newDirection },
      };
    }
    case END_SIMULATION: {
      return { ...state, status: GameStatus.Ended };
    }
    default: {
      return state;
    }
  }
};

export default game;
