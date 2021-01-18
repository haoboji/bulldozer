import { render } from "@testing-library/react";
import React from "react";
import Land from "./Land";
import { Terrain } from "./state/constant";

test("Land component child", () => {
  const c = render(<Land terrain={Terrain.ProtectedTree}>aChild</Land>);
  expect(c.getByText("aChild")).toBeInTheDocument();
});

test("Land styles", () => {
  const c = render(
    <>
      <Land terrain={Terrain.ProtectedTree} />
      <Land terrain={Terrain.RemovableTree} />
      <Land terrain={Terrain.RockyLand} />
      <Land terrain={Terrain.PlainLand} />
      <Land terrain={Terrain.ClearedLand} />
    </>
  );
  expect(c.getByLabelText(Terrain.ProtectedTree)).toBeInTheDocument();
  expect(c.getByLabelText(Terrain.RemovableTree)).toBeInTheDocument();
  expect(c.getByLabelText(Terrain.RockyLand)).toBeInTheDocument();
  expect(c.getByLabelText(Terrain.PlainLand)).toBeInTheDocument();
  expect(c.getByLabelText(Terrain.ClearedLand)).toBeInTheDocument();
});
