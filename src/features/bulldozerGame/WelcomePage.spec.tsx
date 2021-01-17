import { fireEvent, render } from "@testing-library/react";
import React from "react";
import WelcomePage from "./WelcomePage";

test("WelcomePage functionality", () => {
  const uploadMap = jest.fn();
  const useDefault = jest.fn();
  const c = render(
    <WelcomePage onClickDefaultMap={useDefault} onChangeUploadMap={uploadMap} />
  );
  c.getByText(/Use default map/i).click();
  expect(useDefault).toBeCalledTimes(1);
  const files = [new File(["ooo"], "a.txt")];
  fireEvent.change(c.getByLabelText(/Upload site map/i), { target: { files } });
  expect(uploadMap).toBeCalledWith(files);
});
