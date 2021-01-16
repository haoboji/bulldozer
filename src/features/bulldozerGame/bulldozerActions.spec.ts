import { createAppStore } from "../../app/store";
import { Bulldozer } from "./bulldozer";
import { advanceBulldozer } from "./bulldozerActions";

test("Advance bulldozer", () => {
  const bulldozer: Bulldozer = { location: [1, 1], direction: [1, 0] };
  const s = createAppStore({ game: { bulldozer, map: null } });
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.bulldozer.location).toEqual([2, 1]);
});
