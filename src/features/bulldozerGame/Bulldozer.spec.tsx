import { render } from "@testing-library/react";
import React from "react";
import Bulldozer from "./Bulldozer";
import {
  DIRECTION_EAST,
  DIRECTION_NORTH,
  DIRECTION_SOUTH,
  DIRECTION_WEST,
} from "./state/constant";

test("bulldozer east facing", () => {
  const c = render(<Bulldozer facing={DIRECTION_EAST} />);
  expect(c.getByTestId("bulldozer-icon")).toHaveStyle({
    transform: "rotate(0deg)",
  });
});

test("bulldozer south facing", () => {
  const c = render(<Bulldozer facing={DIRECTION_SOUTH} />);
  expect(c.getByTestId("bulldozer-icon")).toHaveStyle({
    transform: "rotate(90deg)",
  });
});

test("bulldozer west facing", () => {
  const c = render(<Bulldozer facing={DIRECTION_WEST} />);
  expect(c.getByTestId("bulldozer-icon")).toHaveStyle({
    transform: "rotate(180deg)",
  });
});

test("bulldozer west facing", () => {
  const c = render(<Bulldozer facing={DIRECTION_NORTH} />);
  expect(c.getByTestId("bulldozer-icon")).toHaveStyle({
    transform: "rotate(270deg)",
  });
});
