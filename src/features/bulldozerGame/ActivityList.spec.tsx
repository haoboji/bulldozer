import { render } from "@testing-library/react";
import React from "react";
import ActivityList from "./ActivityList";
import { PLAIN_LAND, REMOVABLE_TREE } from "./state/constant";
import { Activity } from "./state/report";

test("ActivityList component", () => {
  const activities: Activity[] = [
    { terrain: PLAIN_LAND, location: [12, 34] },
    { terrain: REMOVABLE_TREE, location: [56, 78] },
  ];
  const c = render(<ActivityList activities={activities} />);
  expect(c.getByText(/Clearing plain land/i)).toBeInTheDocument();
  expect(c.getByText(/Clearing land containing a tree/i)).toBeInTheDocument();
  expect(c.getByText("[12,34]")).toBeInTheDocument();
  expect(c.getByText("[56,78]")).toBeInTheDocument();
  expect(c.container).toMatchSnapshot();
});
