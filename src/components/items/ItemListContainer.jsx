import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "items");

    let q = categoria;

    if ((q = categoria)) {
      q = query(productosRef, where("categoryId", "==", categoria));
      setTitulo(categoria);
    } else {
      q = productosRef;
      setTitulo("Productos");
    }

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((prod) => {
          return { ...prod.data(), id: prod.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
