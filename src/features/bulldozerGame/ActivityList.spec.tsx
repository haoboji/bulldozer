import { render } from "@testing-library/react";
import React from "react";
import ActivityList from "./ActivityList";
import { Activity } from "./state/bulldozer";
import { Terrain } from "./state/constant";

test("ActivityList component", () => {
  const activities: Activity[] = [
    { terrain: Terrain.PlainLand, location: [12, 34] },
    { terrain: Terrain.RemovableTree, location: [56, 78] },
  ];
  const c = render(<ActivityList activities={activities} totalCost={999} />);
  expect(c.getByText(/Clearing plain land/i)).toBeInTheDocument();
  expect(c.getByText(/Clearing land containing a tree/i)).toBeInTheDocument();
  expect(c.getByText("[12,34]")).toBeInTheDocument();
  expect(c.getByText("[56,78]")).toBeInTheDocument();
  expect(c.getByText("999")).toBeInTheDocument();
});
