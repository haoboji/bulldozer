import { createAppStore } from "../../../app/store";
import { Bulldozer } from "./bulldozer";
import { advanceBulldozer, rotateBulldozer } from "./bulldozerActions";
import {
  Command,
  DIRECTION_EAST,
  DIRECTION_NORTH,
  DIRECTION_SOUTH,
  DIRECTION_WEST,
  GameStatus,
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
  ROTATION_LEFT,
  ROTATION_RIGHT,
} from "./constant";
import { initialGameState } from "./gameReducer";
import { SiteMap } from "./site";
import { endSimuation, setSiteMap } from "./siteActions";

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

test("Record commands", () => {
  const s = createAppStore();
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.commands[0]).toEqual(Command.Advance);
  s.dispatch(rotateBulldozer(ROTATION_LEFT));
  expect(s.getState().game.commands[1]).toEqual(Command.Left);
  s.dispatch(rotateBulldozer(ROTATION_RIGHT));
  expect(s.getState().game.commands[2]).toEqual(Command.Right);
  s.dispatch(endSimuation());
  expect(s.getState().game.commands[3]).toEqual(Command.Quit);
});

test("Record activities", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [PRESERVED_TREE, REMOVABLE_TREE],
  ];
  const s = createAppStore();
  s.dispatch(setSiteMap(map));
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.activities[0]).toEqual({
    location: [0, 1],
    terrain: PLAIN_LAND,
  });
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.activities[1]).toEqual({
    location: [1, 1],
    terrain: ROCKY_LAND,
  });
  s.dispatch(rotateBulldozer(ROTATION_RIGHT));
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.activities[2]).toEqual({
    location: [1, 0],
    terrain: REMOVABLE_TREE,
  });
});

test("game status 1", () => {
  const map: SiteMap = [[PLAIN_LAND, PRESERVED_TREE]];
  const s = createAppStore();
  s.dispatch(setSiteMap(map));
  expect(s.getState().game.status).toEqual(GameStatus.Starting);
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.status).toEqual(GameStatus.Started);
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.status).toEqual(GameStatus.Error);
});

test("game status 2", () => {
  const map: SiteMap = [[PLAIN_LAND]];
  const s = createAppStore();
  s.dispatch(setSiteMap(map));
  expect(s.getState().game.status).toEqual(GameStatus.Starting);
  s.dispatch(advanceBulldozer());
  expect(s.getState().game.status).toEqual(GameStatus.Started);
  s.dispatch(endSimuation());
  expect(s.getState().game.status).toEqual(GameStatus.Ended);
});
