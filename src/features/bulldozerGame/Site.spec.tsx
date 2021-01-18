import { render, within } from "@testing-library/react";
import React from "react";
import Site, { SiteProps } from "./Site";
import { SiteMap } from "./state/bulldozer";
import { Terrain } from "./state/constant";

test("site tiles count", () => {
  const map: SiteMap = [
    [Terrain.PlainLand, Terrain.RockyLand],
    [Terrain.RemovableTree, Terrain.ProtectedTree],
  ];
  const c = render(<Site map={map} />);
  expect(c.getAllByTestId("tile").length).toBe(16);
});

test("place child on specific tile", () => {
  const map: SiteMap = [
    [Terrain.PlainLand, Terrain.RockyLand],
    [Terrain.ProtectedTree, Terrain.RemovableTree],
  ];
  const TileChildren: SiteProps["TileChildren"] = ({ location: [x, y] }) => {
    if (x === 1 && y === -1) {
      return <div>hasChild</div>;
    }
    return <></>;
  };
  const c = render(<Site map={map} TileChildren={TileChildren} />);
  expect(c.queryAllByText("hasChild").length).toBe(1);
  expect(
    within(c.getByLabelText(Terrain.RemovableTree)).getByText("hasChild")
  ).toBeInTheDocument();
  expect(
    within(c.getByLabelText(Terrain.PlainLand)).queryByText("hasChild")
  ).toBeNull();
});
