import { fireEvent, render } from "@testing-library/react";
import React from "react";
import UploadMap from "./UploadMap";

test("WelcomePage functionality", () => {
  const uploadMap = jest.fn();
  const c = render(<UploadMap onChangeUploadMap={uploadMap} />);
  const files = [new File(["ooo"], "a.txt")];
  fireEvent.change(c.getByLabelText(/Upload site map/i), { target: { files } });
  expect(uploadMap).toBeCalledWith(files);
});
