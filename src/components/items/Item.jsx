import React from "react";
import { Link } from "react-router-dom";
import { toCapital } from "../../helpers/toCapital";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.img} alt={producto.title} />
      <div>
        <h4>{producto.title}</h4>
        <p>Precio: ${producto.price}</p>
        <p>Categoría: {toCapital(producto.title)}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
