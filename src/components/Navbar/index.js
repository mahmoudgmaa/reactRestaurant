import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavElments";

const Navbar = ({toggle}) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Andalus</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
