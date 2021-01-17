import { render } from "@testing-library/react";
import React from "react";
import Site from "./Site";
import {
  PLAIN_LAND,
  ROCKY_LAND,
  REMOVABLE_TREE,
  PRESERVED_TREE,
} from "./state/constant";
import { SiteMap } from "./state/site";

test("Land component child", () => {
  const map: SiteMap = [
    [PLAIN_LAND, ROCKY_LAND],
    [REMOVABLE_TREE, PRESERVED_TREE],
  ];
  const c = render(<Site map={map} />);
  expect(c.getAllByTestId("tile").length).toBe(4);
});
