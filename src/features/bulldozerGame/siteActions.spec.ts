import { createStore } from "redux";
import rootReducer from "../../app/rootReducer";
import { GameStatus, PLAIN_LAND } from "./constant";
import { SiteMap } from "./site";
import { endSimuation, setSiteMap } from "./siteActions";

test("Set site map", () => {
  const s = createStore(rootReducer);
  const map: SiteMap = Array(3).fill(Array(3).fill(PLAIN_LAND));
  s.dispatch(setSiteMap(map));
  expect(s.getState().game.map).toEqual(map);
});

test("End simulation", () => {
  const s = createStore(rootReducer);
  expect(s.getState().game.status).toEqual(GameStatus.Starting);
  s.dispatch(endSimuation());
  expect(s.getState().game.status).toEqual(GameStatus.Ended);
});
