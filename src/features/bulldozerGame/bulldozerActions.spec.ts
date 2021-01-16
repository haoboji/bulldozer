import { createAppStore } from "../../app/store";
import { Bulldozer } from "./bulldozer";
import { advanceBulldozer, rotateBulldozer } from "./bulldozerActions";
import {
  DIRECTION_EAST,
  DIRECTION_NORTH,
  DIRECTION_SOUTH,
  DIRECTION_WEST,
  GameStatus,
  PLAIN_LAND,
  PRESERVED_TREE,
  ROCKY_LAND,
  ROTATION_LEFT,
  ROTATION_RIGHT,
} from "./constant";
import { initialGameState } from "./gameReducer";
import { SiteMap } from "./site";

test("Advance bulldozer", () => {
  const bulldozer: Bulldozer = { location: [1, 1], direction: [1, 0] };
  const s = createAppStore({ game: { ...initialGameState, bulldozer } });
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.bulldozer.location).toEqual([2, 1]);
});

test("Turn bulldozer right", () => {
  const bulldozer: Bulldozer = { location: [1, 1], direction: DIRECTION_EAST };
  const s = createAppStore({ game: { ...initialGameState, bulldozer } });
  s.dispatch(rotateBulldozer(ROTATION_RIGHT));
  expect(s.getState().game.bulldozer.direction).toEqual(DIRECTION_SOUTH);
});

test("Turn bulldozer left", () => {
  const bulldozer: Bulldozer = { location: [1, 1], direction: DIRECTION_NORTH };
  const s = createAppStore({ game: { ...initialGameState, bulldozer } });
  s.dispatch(rotateBulldozer(ROTATION_LEFT));
  expect(s.getState().game.bulldozer.direction).toEqual(DIRECTION_WEST);
});

test("Invalid bulldozer move", () => {
  const map: SiteMap = [[PLAIN_LAND, ROCKY_LAND, PRESERVED_TREE]];
  const bulldozer: Bulldozer = { location: [0, 0], direction: DIRECTION_EAST };
  const s = createAppStore({
    game: { ...initialGameState, bulldozer, map, status: GameStatus.Started },
  });
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.status).toBe(GameStatus.Started);
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.status).toBe(GameStatus.Error);
});
