import React from "react";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import { AuthorSelect } from "../author-select";

afterEach(cleanup);

describe("<Search /> spec", () => {
  it("Renders a select with provided options", () => {
    const { asFragment } = render(
      <AuthorSelect options={[1, 2, 3]} onChangeHandler={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Calls on Change for onChangeHandler method", async () => {
    const onChangeHandler = jest.fn();

    const { getByRole } = render(
      <AuthorSelect options={[1, 2, 3]} onChangeHandler={onChangeHandler} />
    );

    const select = getByRole("combobox");

    fireEvent.change(select, { target: { value: 1 } });

    await wait(() => expect(onChangeHandler).toHaveBeenCalled(), {
      timeout: 300,
    });
  });
});
