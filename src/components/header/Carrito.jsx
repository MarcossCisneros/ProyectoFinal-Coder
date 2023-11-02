import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id} className="carrito__container">
          <h3>{prod.title}</h3>
          <img src={prod.img} alt={prod.title} />
          <div className="carrito__container-items">
            <p>Precio unit: ${prod.price}</p>
            <p>Precio total: ${Number(prod.price * prod.cantidad)}</p>
            <p>Cant: {prod.cantidad}</p>
          </div>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div className="carrito__detail">
          <h2>Precio total: ${precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar</button>
          <Link to="/checkout">Finalizar compra</Link>
        </div>
      ) : (
        <h2>El carrito está vacío :(</h2>
      )}
    </div>
  );
};

export default Carrito;
