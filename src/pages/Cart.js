import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CartContainer } from "./styles/cartElments";
import { selectCart } from "../slices/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(selectCart);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(cart);
  return (
    <CartContainer>
      <Navbar toggle={toggle} />
    </CartContainer>
  );
};

export default Cart;
