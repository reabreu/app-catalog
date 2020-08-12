import React from "react";
import { render } from "@testing-library/react";
import { Title } from "../title";

describe("<Title /> spec", () => {
  it("Renders Title", () => {
    const { asFragment } = render(<Title />);

    expect(asFragment()).toMatchSnapshot();
  });
});
