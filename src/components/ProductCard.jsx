import React from 'react';

function ProductCard({ name, price, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
