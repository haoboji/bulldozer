import { createAppStore } from "../../../app/store";
import { GameStatus, PLAIN_LAND } from "./constant";
import { SiteMap } from "./site";
import { endSimuation, setSiteMap } from "./siteActions";

test("Set site map", () => {
  const s = createAppStore();
  const map: SiteMap = Array(3).fill(Array(3).fill(PLAIN_LAND));
  s.dispatch(setSiteMap(map));
  expect(s.getState().game.map).toEqual(map);
});

test("End simulation", () => {
  const s = createAppStore();
  expect(s.getState().game.status).toEqual(GameStatus.Starting);
  s.dispatch(endSimuation());
  expect(s.getState().game.status).toEqual(GameStatus.Ended);
});
