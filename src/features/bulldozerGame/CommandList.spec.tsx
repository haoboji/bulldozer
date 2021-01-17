import { render } from "@testing-library/react";
import React from "react";
import config from "../../app/config";
import CommandList from "./CommandList";
import { Command } from "./state/constant";

test("CommandList component", () => {
  const c = render(<CommandList commands={[Command.Advance, Command.Quit]} />);
  const n = config.commandName;
  expect(c.getByText(`1. ${n[Command.Advance]}`)).toBeInTheDocument();
  expect(c.getByText(`2. ${n[Command.Quit]}`)).toBeInTheDocument();
});
