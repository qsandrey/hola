import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div>
      <Header />
      <ProductCard name="Suplemento X" price={30} description="Excelente suplemento para energías" />
    </div>
  );
}

export default App;


/*MI APP PRINCIPAL ES EL APP.JS*/