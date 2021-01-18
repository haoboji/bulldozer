import { render } from "@testing-library/react";
import React from "react";
import config from "../../app/config";
import MapLegend from "./MapLegend";

test("Legend component", () => {
  const c = render(<MapLegend />);
  Object.values(config.terrainName).forEach((name) => {
    expect(c.getByText(name)).toBeInTheDocument();
  });
  expect(c.getByText("Bulldozer")).toBeInTheDocument();
});
