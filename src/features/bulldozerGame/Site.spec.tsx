import { render, within } from "@testing-library/react";
import React from "react";
import Site, { SiteProps } from "./Site";
import {
  PLAIN_LAND,
  ROCKY_LAND,
  REMOVABLE_TREE,
  PRESERVED_TREE,
} from "./state/constant";
import { SiteMap } from "./state/site";

test("site tiles count", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [REMOVABLE_TREE, PRESERVED_TREE],
  ];
  const c = render(<Site map={map} />);
  expect(c.getAllByTestId("tile").length).toBe(4);
});

test("place child on specific tile", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [REMOVABLE_TREE, PRESERVED_TREE],
  ];
  const TileChildren: SiteProps["TileChildren"] = ({ location: [x, y] }) => {
    if (x === 0 && y === 1) {
      return <div>hasChild</div>;
    }
    return <></>;
  };
  const c = render(<Site map={map} TileChildren={TileChildren} />);
  expect(c.queryAllByText("hasChild").length).toBe(1);
  const plainLand = within(c.getByTestId("terrain-o"));
  const rock = within(c.getByTestId("terrain-r"));
  expect(plainLand.queryByText("hasChild")).toBeDefined();
  expect(rock.queryByText("hasChild")).toBeNull();
});
