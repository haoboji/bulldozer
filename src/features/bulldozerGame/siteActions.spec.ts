import { createStore } from "redux";
import rootReducer from "../../app/rootReducer";
import { PLAIN_LAND } from "./constant";
import { SiteMap } from "./site";
import { setSiteMap } from "./siteActions";

test("Set site map", () => {
  const s = createStore(rootReducer);
  const map: SiteMap = Array(3).fill(Array(3).fill(PLAIN_LAND));
  s.dispatch(setSiteMap(map));
  expect(s.getState().game.map).toEqual(map);
});
