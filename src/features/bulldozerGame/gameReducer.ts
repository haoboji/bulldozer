import { BulldozerGameAction, SET_SITE_MAP } from "./actionTypes";
import { SiteMap } from "./site";

export interface GameState {
  map: SiteMap | null;
}

const initialState: GameState = { map: null };

const game = (state = initialState, action: BulldozerGameAction): GameState => {
  switch (action.type) {
    case SET_SITE_MAP:
      return { ...state, map: action.map };
    default:
      return state;
  }
};

export default game;
