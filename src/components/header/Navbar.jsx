import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import menuClose from "../../assets/close-menu.png";
import menuOpen from "../../assets/open-menu.png";

const Navbar = () => {
  function abrirCerrar() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("not-visible");
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>DriFF</h1>
      </Link>
      <button className="buttonMenu" onClick={abrirCerrar}>
        <img src={menuOpen} alt="openMenu" />
      </button>
      <ul className="menu not-visible">
        <button className="buttonMenu" onClick={abrirCerrar}>
          <img src={menuClose} alt="close" />
        </button>
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/skate">
            Skates
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/zapatillas">
            Zapatillas
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/gorros">
            Gorros
          </Link>
        </li>

        <li>
          <Link className="menu-link contact" to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
