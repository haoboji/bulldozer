import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createAppStore } from "../../app/store";
import { setSiteMap } from "./state/siteActions";
import { PLAIN_LAND } from "./state/constant";
import BulldozerGame from "./BulldozerGame";
import { advanceBulldozer } from "./state/bulldozerActions";

test("bulldozer game layout before/after uploading map", () => {
  const s = createAppStore();
  const c = render(
    <Provider store={s}>
      <BulldozerGame />
    </Provider>
  );
  expect(c.getByText(/Upload site map/i)).toBeInTheDocument();
  expect(c.queryByText(/advance/i)).toBeNull();
  s.dispatch(setSiteMap([[PLAIN_LAND]]));
  expect(c.queryByText(/Upload site map/i)).toBeNull();
  expect(c.getByText(/advance/i)).toBeInTheDocument();
});

test("bulldozer on map", () => {
  const s = createAppStore();
  const c = render(
    <Provider store={s}>
      <BulldozerGame />
    </Provider>
  );
  s.dispatch(setSiteMap([[PLAIN_LAND]]));
  expect(c.queryByTestId("bulldozer-icon")).toBeNull();
  s.dispatch(advanceBulldozer());
  expect(c.getByTestId("bulldozer-icon")).toBeInTheDocument();
});
