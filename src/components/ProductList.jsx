import React, { useState } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import images from '../images';

function ProductList({ searchQuery, addToCart }) {
  const [hoveredProduct, setHoveredProduct] = useState(null); 

  const products = {
    Productos: [
      { id: 1, name: 'CREATINAS', price: 25.000, description: 'Mejora tu rendimiento físico y acelera la recuperación muscular.', image: images.creatinas },
      { id: 2, name: 'AMINOÁCIDOS', price: 18.000, description: 'Optimiza la síntesis de proteínas y reduce la fatiga muscular.', image: images.aminoacidos },
      { id: 3, name: 'PROTEINAS WHEY', price: 30.000, description: 'Proporciona una fuente de proteínas de alta calidad para tus entrenamientos.', image: images.proteinas },
      { id: 4, name: 'GANADORES DE PESO', price: 30.000, description: 'Aumenta tu masa muscular con una mezcla de calorías y proteínas.', image: images.ganadores },
      { id: 5, name: 'QUEMADORES', price: 19.999, description: 'Potencia la quema de grasa y aumenta tus niveles de energía.', image: images.quemadores },
      { id: 6, name: 'PRE-ENTRENOS', price: 25.000, description: 'Incrementa tu enfoque, resistencia y potencia antes del entrenamiento.', image: images.preentrenos },
      { id: 7, name: 'SNACKS', price: 3, description: 'Deliciosos y nutritivos, ideales para complementar tu dieta fitness.', image: images.snacks },
      { id: 8, name: 'PROTEINAS ISOLADAS', price: 35.000, description: 'Proteína pura y de rápida absorción para resultados óptimos.', image: images.proteinasiso },
      { id: 9, name: 'PROTEINAS DE MED Y LENTA ABS', price: 18.99, description: 'Liberación sostenida de proteínas para una recuperación prolongada.', image: images.protelenta },
      { id: 10, name: 'BEBIDAS ENERGETICAS', price: 3, description: 'Recarga tu energía con sabores intensos y refrescantes.', image: images.bebidas },
    ],    
    Promociones: [
      { id: 11, name: 'C4', price: 22.9, description: 'Explosiva energía y enfoque para maximizar tu entrenamiento.', image: images.c4 },
      { id: 12, name: 'METABOLIC MASS', price: 39.9, description: 'Ganador de peso diseñado para un aumento muscular efectivo.', image: images.metabolis },
      { id: 13, name: 'CAFEINE + TEURINE', price: 8.9, description: 'Energía duradera y rendimiento optimizado con cada porción.', image: images.cafeine },
      { id: 14, name: 'PRE-ENTRENO GEAAR', price: 15.9, description: 'Mejora tu resistencia y recuperación durante tus rutinas intensas.', image: images.preentreno },
      { id: 15, name: 'PRE-ENTRENO CURSE', price: 15.9, description: 'Energía extrema y máxima concentración para tus entrenamientos.', image: images.preentreno2 },
    ],    
    Camisas: [
      { id: 19, name: 'YGLA PREMIUM', price: 29.99, description: 'Camiseta de alta calidad para un look único y comodidad todo el día.', image: images.ygladark },
      { id: 20, name: 'YGLA GRAFITI', price: 25.99, description: 'Estilo urbano y moderno para destacar en cualquier ocasión.', image: images.yglagrafiti },
      { id: 21, name: 'YGLA AMARILLA', price: 22.99, description: 'Colores vibrantes que combinan con tu energía y personalidad.', image: images.yglaamarilla },
      { id: 22, name: 'YGLA NEGRA', price: 22.99, description: 'Elegancia y versatilidad en una camiseta ideal para tus entrenamientos.', image: images.yglanegra },
      { id: 23, name: 'YGLA FEM NEGRA', price: 29.99, description: 'Diseñada especialmente para mujeres que valoran el estilo y confort.', image: images.yglafemenina },
      { id: 24, name: 'YGLA FEM CONJUNTO', price: 35.99, description: 'Conjunto femenino perfecto para entrenar con estilo.', image: images.yglaconjunto },
      { id: 25, name: 'YGLA FEM ROJO', price: 29.99, description: 'Añade un toque de intensidad y confianza a tu outfit.', image: images.yglarojo },
      { id: 26, name: 'YGLA FEM BLANCA', price: 29.99, description: 'Sencilla y elegante, ideal para cualquier ocasión.', image: images.yglablanca },
    ],
    Hoddies: [
      { id: 21, name: 'HODDIE SNK SPECIAL EDITION', price: 35.99, description: 'Diseño exclusivo para lucir con estilo y mantenerte abrigado.', image: images.hoddiessnk },
      { id: 22, name: 'HODDIE YGLA', price: 30.00, description: 'Comodidad y funcionalidad, perfecto para días fríos.', image: images.hoddieygla },
      { id: 23, name: 'HODDIE UFC', price: 30.00, description: 'Ideal para los fanáticos del deporte y los entrenamientos intensos.', image: images.hoddieufc },
      { id: 24, name: 'HODDIE SNK', price: 30.00, description: 'Un básico para tu armario, con un diseño para amantes del anime.', image: images.hoddiessnk2 },
      { id: 25, name: 'HODDIE FEM VINO', price: 30.00, description: 'Estilo femenino y sofisticado en un cálido tono vino.', image: images.hoddiefem },
      { id: 26, name: 'HODDIE BLANCA', price: 30.00, description: 'Versátil y minimalista, ideal para cualquier look casual.', image: images.hoddieblanca },
      { id: 27, name: 'HODDIE GRIS', price: 30.00, description: 'Perfecto para mantenerte cómodo con un toque de sobriedad.', image: images.hoddiegris },
      { id: 28, name: 'HODDIE SPECIAL EDITION', price: 35.00, description: 'Edición limitada para quienes buscan destacar con estilo.', image: images.hoddiespecial },
    ],
  };

  const filterProducts = (category) => {
    return products[category].filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      {Object.keys(products).map((category) => {
        const filteredProducts = filterProducts(category); 

        if (filteredProducts.length === 0) return null; 

        let gridColumns = 5; 

        if (category === 'Camisas' || category === 'Hoddies') {
          gridColumns = 4;
        }

        return (
          <Box key={category} sx={{ marginBottom: 4 }}>
           
            <Typography 
              variant="h5" 
              sx={{ marginBottom: 2, fontWeight: 'bold', fontFamily: '"Saira Stencil One", sans-serif', color: 'black', fontSize: '3rem', textAlign: 'center' }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
            
           
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={4}>
                
                  {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={12 / gridColumns} key={product.id}>
                    <Paper 
                      sx={{ 
                        padding: 3, 
                        borderRadius: 2, 
                        boxShadow: 3, 
                        transition: 'transform 0.3s, box-shadow 0.3s', 
                        
                        '&:hover': { 
                          transform: 'scale(1.05)', 
                          boxShadow: 6, 
                          cursor: 'pointer', 
                        }, 
                        backgroundColor: '#f5f5f5' 
                      }}
                      onMouseEnter={() => setHoveredProduct(product.id)} 
                      onMouseLeave={() => setHoveredProduct(null)} 
                    >
                      <div style={{ position: 'relative', overflow: 'hidden', height: 'auto' }}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          style={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            borderRadius: '8px' 
                          }} 
                        />
                        {hoveredProduct === product.id && (
                          <div 
                            style={{
                              position: 'absolute', 
                              bottom: 0, 
                              left: 0, 
                              right: 0, 
                              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                              color: 'white', 
                              padding: '10px', 
                            }}
                          >
                            <Typography variant="body2">
                              {product.description}
                            </Typography>
                          </div>
                        )}
                      </div>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                        ¢{product.price.toFixed(3)}
                      </Typography>
                      <button 
                        onClick={() => addToCart(product)} 
                        style={{
                          marginTop: '10px', 
                          padding: '10px 15px', 
                          borderRadius: '5px', 
                          border: 'none', 
                          backgroundColor: '#3f51b5', 
                          color: 'white', 
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        Añadir al Carrito
                      </button>
                    </Paper>
                  </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export default ProductList;
