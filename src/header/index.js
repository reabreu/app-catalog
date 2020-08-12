import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles";
import { GSLogo } from "./gs-logo-on-dark";

export const TopNav = () => (
  <Header>
    <Link to={"/"}>
      <GSLogo />
    </Link>
  </Header>
);
