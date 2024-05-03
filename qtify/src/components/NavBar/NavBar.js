import React from "react";
import "./NavBar.css";
import Logo from "../Logo/logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
