import React from "react";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import { Search } from "../search";

afterEach(cleanup);

describe("<Search /> spec", () => {
  it("Contains search input and sets initial value", () => {
    const { asFragment } = render(
      <Search searchTerm={"foo"} onChangeHandler={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls debounced onChangeHandler on input change ", async () => {
    const onChangeHandler = jest.fn();

    const { getByRole } = render(
      <Search searchTerm={"foo"} onChangeHandler={onChangeHandler} />
    );

    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "a" } });

    await wait(() => expect(onChangeHandler).toHaveBeenCalledWith("a"), {
      timeout: 300,
    });
  });
});
