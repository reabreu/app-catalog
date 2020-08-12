import React from "react";
import { SearchInput } from "./styles";
import debounce from "lodash.debounce";

const SEARCH_DEBOUNCE_INTERVAL = 300;

export const Search = ({ searchTerm, onChangeHandler }) => {
  const debouncedDispatch = debounce(onChangeHandler, SEARCH_DEBOUNCE_INTERVAL);

  return (
    <SearchInput
      onChange={(e) => debouncedDispatch(e.target.value)}
      defaultValue={searchTerm}
      placeholder={"Search"}
    />
  );
};
