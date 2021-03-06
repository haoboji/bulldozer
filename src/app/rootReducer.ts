import { combineReducers } from "redux";
import game from "../features/bulldozerGame/state/gameReducer";

const rootReducer = combineReducers({
  game,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
