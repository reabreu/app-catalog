import React from "react";
import { AuthSelect, AuthOption } from "./styles";

export const AuthorSelect = ({ options, onChangeHandler }) => (
  <AuthSelect onChange={onChangeHandler}>
    <AuthOption value={""}>Select an author</AuthOption>
    {options.map((author) => (
      <AuthOption key={author} value={author}>
        {author}
      </AuthOption>
    ))}
  </AuthSelect>
);
