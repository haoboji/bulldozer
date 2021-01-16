import {
  ADVANCE_BULLDOZER,
  BulldozerGameAction,
  ROTATE_BULLDOZER,
  SET_SITE_MAP,
} from "./actionTypes";
import { Bulldozer, Location } from "./bulldozer";
import { DIRECTION_EAST } from "./constant";
import { SiteMap } from "./site";
import { add, multiply } from "mathjs";

export interface GameState {
  map: SiteMap | null;
  bulldozer: Bulldozer;
}

const initialBulldozer: Bulldozer = {
  location: [0, -1],
  direction: DIRECTION_EAST,
};

const initialState: GameState = { map: null, bulldozer: initialBulldozer };

const game = (state = initialState, action: BulldozerGameAction): GameState => {
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
    default: {
      return state;
    }
  }
};

export default game;
