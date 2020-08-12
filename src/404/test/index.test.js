import React from "react";
import { render } from "@testing-library/react";
import NotFound from "../index";

describe("<NotFound /> spec", () => {
  it("Renders NotFound", () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
