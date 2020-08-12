import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Catalog from "../index";
import { rest } from "msw";
import { CatalogProvider, fetchAllApps } from "../../state/catalog-context";
import { server } from "../../setupTests";

describe("Catalog spec", () => {
  it("Renders with fetching state and renders items on success", async () => {
    const { asFragment, findAllByRole, findByText } = render(
      <Router>
        <CatalogProvider>
          <Catalog />
        </CatalogProvider>
      </Router>
    );

    //Initial rendering state
    expect(asFragment()).toMatchSnapshot();

    //Rendered list
    expect(await findAllByRole("listitem")).toHaveLength(2);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders button to retry on error", async () => {
    server.resetHandlers([
      rest.get("/apps", (req, res, ctx) => {
        res.status(404);
      }),
    ]);

    const { findByRole, asFragment } = render(
      <Router>
        <CatalogProvider>
          <Catalog />
        </CatalogProvider>
      </Router>
    );

    await findByRole("button");

    //Error state
    expect(asFragment()).toMatchSnapshot();
  });
});
