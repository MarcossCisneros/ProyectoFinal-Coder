import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import iconCart from "../../assets/icon-cart.png";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <img src={iconCart} alt="carrito" />
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
