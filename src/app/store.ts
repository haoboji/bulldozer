import { createStore } from "redux";
import rootReducer, { AppState } from "./rootReducer";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createAppStore = (preloadedState?: Partial<AppState>) =>
  createStore(rootReducer, preloadedState);

export default createAppStore();
