import React from "react";
import { Main, Menu } from "./style";
import { Link } from "react-router-dom";
import MarvelLogo from "../../assets/Marvel_Logo.svg.png";

export const Header = () => {
  return (
    <Main>
      <Menu>
        <Link to="/feed" style={{ textDecoration: "none" }}>
          <p>SEARCH</p>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={MarvelLogo} alt="" />
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p>ABOUT</p>
        </Link>
      </Menu>
    </Main>
  );
};
