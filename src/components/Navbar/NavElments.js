import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-left: 2rem;
`;

export const NavIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 1rem;
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin: 0 10px ;
`;
export const Cart = styled(FaCartArrowDown)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
  margin: 0 10px;
`;
