import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Catalog from "../index";
import { CatalogProvider } from "../../state/catalog-context";

describe("Catalog spec", () => {
  it("Renders app list on request sucess", async () => {
    const { asFragment, findAllByRole } = render(
      <Router>
        <CatalogProvider>
          <Catalog />
        </CatalogProvider>
      </Router>
    );

    //Rendered list
    expect(await findAllByRole("listitem")).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
  });
});
