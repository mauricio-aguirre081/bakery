import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  return (
    <div >
      <img src={product.image} alt={product.title} />
      <div >
        <div>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        <Link to="/cart">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;