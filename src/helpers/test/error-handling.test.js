import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import * as CatalogContext from "../../state/catalog-context";
import { server } from "../../setupTests";
import { RenderWithErrorHandling } from "../error-handling";

describe("<RenderWithErrorHandling /> spec", () => {
  beforeEach(() => {
    jest.spyOn(CatalogContext, "useCatalogState");
  });

  it("Renders children on IDLE", () => {
    CatalogContext.useCatalogState.mockImplementation(() => ({
      status: CatalogContext.STATUS.IDLE,
    }));

    const { asFragment } = render(
      <CatalogContext.CatalogProvider>
        <RenderWithErrorHandling>
          <p>children</p>
        </RenderWithErrorHandling>
      </CatalogContext.CatalogProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders fetching text on FETCHING", () => {
    CatalogContext.useCatalogState.mockImplementation(() => ({
      status: CatalogContext.STATUS.FETCHING,
    }));

    const { asFragment } = render(
      <CatalogContext.CatalogProvider>
        <RenderWithErrorHandling>
          <p>children</p>
        </RenderWithErrorHandling>
      </CatalogContext.CatalogProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders error button text on ERROR", async () => {
    CatalogContext.useCatalogState.mockImplementation(() => ({
      status: CatalogContext.STATUS.ERROR,
    }));

    const myMock = jest.fn();

    const { asFragment, findByRole } = render(
      <CatalogContext.CatalogProvider>
        <RenderWithErrorHandling onErrorRetry={myMock}>
          <p>children</p>
        </RenderWithErrorHandling>
      </CatalogContext.CatalogProvider>
    );

    expect(asFragment()).toMatchSnapshot();

    const button = await findByRole("button");

    fireEvent.click(button);

    expect(myMock).toHaveBeenCalled();
  });
});
