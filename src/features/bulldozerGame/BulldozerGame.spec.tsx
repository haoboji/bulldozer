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

test("bulldozer game layout before/after uploading map", () => {
  const s = createAppStore();
  const c = render(
    <Provider store={s}>
      <BulldozerGame />
    </Provider>
  );
  expect(c.getByText(/Upload site map/i)).toBeInTheDocument();
  expect(c.queryByText(/advance/i)).toBeNull();
  expect(c.queryByText(/activity/i)).toBeNull();
  expect(c.queryByText(/command/i)).toBeNull();
  expect(c.queryByTestId("bulldozer-icon")).toBeNull();
  s.dispatch(setSiteMap([[Terrain.PlainLand]]));
  expect(c.queryByText(/Upload site map/i)).toBeNull();
  expect(c.getByText(/advance/i)).toBeInTheDocument();
  expect(c.getByText(/activity/i)).toBeInTheDocument();
  expect(c.getByText(/command/i)).toBeInTheDocument();
  expect(c.getAllByTestId("bulldozer-icon").length).toBe(2);
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
