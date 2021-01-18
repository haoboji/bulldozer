import { render } from "@testing-library/react";
import React from "react";
import Land from "./Land";
import {
  CLEARED_LAND,
  PLAIN_LAND,
  PRESERVED_TREE,
  REMOVABLE_TREE,
  ROCKY_LAND,
} from "./state/constant";

test("Land component child", () => {
  const c = render(<Land terrain={PRESERVED_TREE}>aChild</Land>);
  expect(c.getByText("aChild")).toBeInTheDocument();
});

test("Land styles", () => {
  const c = render(
    <>
      <Land terrain={PRESERVED_TREE} />
      <Land terrain={REMOVABLE_TREE} />
      <Land terrain={ROCKY_LAND} />
      <Land terrain={PLAIN_LAND} />
      <Land terrain={CLEARED_LAND} />
    </>
  );
  expect(c.getByLabelText(PRESERVED_TREE)).toBeInTheDocument();
  expect(c.getByLabelText(REMOVABLE_TREE)).toBeInTheDocument();
  expect(c.getByLabelText(ROCKY_LAND)).toBeInTheDocument();
  expect(c.getByLabelText(PLAIN_LAND)).toBeInTheDocument();
  expect(c.getByLabelText(CLEARED_LAND)).toBeInTheDocument();
});
