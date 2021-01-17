import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ControlContainer from "./ControlContainer";
import { GameStatus } from "./state/constant";
import { initialGameState } from "./state/gameReducer";

test("game button status before bulldozer on site", () => {
  const s = configureMockStore()({
    game: {
      ...initialGameState,
      status: GameStatus.Starting,
    },
  });
  const c = render(
    <Provider store={s}>
      <ControlContainer />
    </Provider>
  );
  expect(c.getByRole("button", { name: /advance/i })).not.toBeDisabled();
  expect(c.getByRole("button", { name: /left/i })).toBeDisabled();
  expect(c.getByRole("button", { name: /right/i })).toBeDisabled();
  expect(c.getByRole("button", { name: /quit/i })).toBeDisabled();
});

test("game button status after bulldozer on site", () => {
  const s = configureMockStore()({
    game: {
      ...initialGameState,
      status: GameStatus.Started,
    },
  });
  const c = render(
    <Provider store={s}>
      <ControlContainer />
    </Provider>
  );
  expect(c.getByRole("button", { name: /advance/i })).not.toBeDisabled();
  expect(c.getByRole("button", { name: /left/i })).not.toBeDisabled();
  expect(c.getByRole("button", { name: /right/i })).not.toBeDisabled();
  expect(c.getByRole("button", { name: /quit/i })).not.toBeDisabled();
});

test("button status upon ending game", () => {
  const s = configureMockStore()({
    game: {
      ...initialGameState,
      status: GameStatus.Ended,
    },
  });
  const c = render(
    <Provider store={s}>
      <ControlContainer />
    </Provider>
  );
  expect(c.getByRole("button", { name: /advance/i })).toBeDisabled();
  expect(c.getByRole("button", { name: /left/i })).toBeDisabled();
  expect(c.getByRole("button", { name: /right/i })).toBeDisabled();
  expect(c.getByRole("button", { name: /quit/i })).toBeDisabled();
});

test("game control action", () => {
  const s = configureMockStore()({
    game: {
      ...initialGameState,
      status: GameStatus.Started,
    },
  });
  const c = render(
    <Provider store={s}>
      <ControlContainer />
    </Provider>
  );
  c.getByText(/advance/i).click();
  c.getByText(/left/i).click();
  c.getByText(/right/i).click();
  c.getByText(/quit/i).click();
  expect(s.getActions()).toMatchInlineSnapshot(`
    Array [
      Object {
        "type": "ADVANCE_BULLDOZER",
      },
      Object {
        "rotation": Array [
          Array [
            0,
            1,
          ],
          Array [
            -1,
            0,
          ],
        ],
        "type": "ROTATE_BULLDOZER",
      },
      Object {
        "rotation": Array [
          Array [
            0,
            -1,
          ],
          Array [
            1,
            0,
          ],
        ],
        "type": "ROTATE_BULLDOZER",
      },
      Object {
        "type": "END_SIMULATION",
      },
    ]
  `);
});
