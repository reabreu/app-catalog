import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopNav } from "../index";

describe("<TopNav /> spec", () => {
  it("Renders TopNav with home url", () => {
    const { asFragment } = render(
      <Router>
        <TopNav />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
