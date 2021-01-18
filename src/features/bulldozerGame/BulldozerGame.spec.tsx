import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { createAppStore } from "../../app/store";
import { setSiteMap } from "./state/siteActions";
import { Terrain } from "./state/constant";
import BulldozerGame from "./BulldozerGame";
import { SET_SITE_MAP } from "./state/actionTypes";
import { initialGameState } from "./state/gameReducer";
import { advanceBulldozer, endSimuation } from "./state/bulldozerActions";

test("bulldozer game layout before/after uploading map", () => {
  const s = createAppStore();
  const c = render(
    <Provider store={s}>
      <BulldozerGame />
    </Provider>
  );
  // upload page
  expect(
    c.getByRole("button", { name: /Upload site map/i })
  ).toBeInTheDocument();
  // control panel
  expect(c.queryByRole("button", { name: /advance/i })).toBeNull();
  // activity list
  expect(c.queryByText(/activity/i)).toBeNull();
  // command list
  expect(c.queryByText(/Command List/i)).toBeNull();
  // Map Legend
  expect(c.queryByText(/Map Legend/i)).toBeNull();
  // bulldozer
  expect(c.queryByTestId("bulldozer-icon")).toBeNull();
  s.dispatch(setSiteMap([[Terrain.PlainLand]]));
  expect(c.queryByRole("button", { name: /Upload site map/i })).toBeNull();
  expect(c.getByRole("button", { name: /advance/i })).toBeInTheDocument();
  expect(c.getByText(/activity/i)).toBeInTheDocument();
  expect(c.getByText(/Command List/i)).toBeInTheDocument();
  expect(c.getByText(/Map Legend/i)).toBeInTheDocument();
  expect(c.getAllByTestId("bulldozer-icon").length).toBe(2);
});

test("bulldozer game layout before/after ending simulation", () => {
  const s = createAppStore();
  const c = render(
    <Provider store={s}>
      <BulldozerGame />
    </Provider>
  );
  s.dispatch(setSiteMap([[Terrain.PlainLand]]));
  s.dispatch(advanceBulldozer());
  expect(c.getByText(/Site Clearing Simulation/i)).toBeInTheDocument();
  expect(c.queryByText(/game over/i)).toBeNull();
  s.dispatch(endSimuation());
  expect(c.getByText(/game over/i)).toBeInTheDocument();
  expect(c.queryByText(/Site Clearing Simulation/i)).toBeNull();
});

test("upload map via ui", async () => {
  const s = configureMockStore()({ game: initialGameState });
  const c = render(
    <Provider store={s}>
      <BulldozerGame />
    </Provider>
  );
  const files = [new File(["o"], "a.txt")];
  fireEvent.change(c.getByLabelText(/Upload site map/i), { target: { files } });
  await waitFor(() =>
    expect(s.getActions()[0]).toMatchObject({ type: SET_SITE_MAP })
  );
});
