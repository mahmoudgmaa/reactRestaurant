import React from "react";
import { Nav, NavLink, NavIcon, Bars, Cart, NavIconLeft } from "./NavElments";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const history = useHistory();
  return (
    <Nav>
      <NavLink to="/">Andalus</NavLink>
      <NavIcon>
        <Cart onClick={()=>history.push("/cart")}/>
        <Bars onClick={toggle} />
      </NavIcon>
    </Nav>
  );
};

export default Navbar;
