import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ControlContainer from "./ControlContainer";

test("game control ui", () => {
  const s = configureMockStore()();
  const c = render(
    <Provider store={s}>
      <ControlContainer />
    </Provider>
  );
  c.getByText(/advance/i).click();
  c.getByText(/left/i).click();
  c.getByText(/right/i).click();
  c.getByText(/quit/i).click();
  expect(s.getActions()).toMatchInlineSnapshot(`
    Array [
      Object {
        "type": "ADVANCE_BULLDOZER",
      },
      Object {
        "rotation": Array [
          Array [
            0,
            1,
          ],
          Array [
            -1,
            0,
          ],
        ],
        "type": "ROTATE_BULLDOZER",
      },
      Object {
        "rotation": Array [
          Array [
            0,
            -1,
          ],
          Array [
            1,
            0,
          ],
        ],
        "type": "ROTATE_BULLDOZER",
      },
      Object {
        "type": "END_SIMULATION",
      },
    ]
  `);
});
