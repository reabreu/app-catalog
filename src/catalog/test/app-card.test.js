import React from "react";
import { render } from "@testing-library/react";
import { AppCard } from "../app-card";
import { BrowserRouter as Router } from "react-router-dom";

describe("<AppCard /> spec", () => {
  it("Renders Card", () => {
    const appData = {
      id: "foo",
      iconURL: "foo.jpg",
      name: "foo app",
      version: "1.2.2",
    };

    const { asFragment } = render(
      <Router>
        <AppCard app={appData} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
