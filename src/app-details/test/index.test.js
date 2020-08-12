import React from "react";
import { render } from "@testing-library/react";
import { Route, MemoryRouter } from "react-router-dom";
import AppDetails from "../index";
import { CatalogProvider } from "../../state/catalog-context";

describe("Catalog spec", () => {
  it("Renders app details on data fetch sucess", async () => {
    const { asFragment, findAllByRole } = render(
      <MemoryRouter initialEntries={["/app/foo"]}>
        <Route path="/app/:id">
          <CatalogProvider>
            <AppDetails />
          </CatalogProvider>
        </Route>
      </MemoryRouter>
    );

    //Rendered list
    expect(await findAllByRole("img")).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
