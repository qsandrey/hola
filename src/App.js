import React, { useState } from "react";
import { Container, Typography, Box, Drawer } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

function App() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(""); 
  const [cart, setCart] = useState([]); 
  const [isCartOpen, setCartOpen] = useState(false); 

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)} 
      />

      <main>
        <Container maxWidth="lg">
          {location.pathname === "/" && (
            <Typography
              variant="h1"
              align="center"
              gutterBottom
              sx={{
                fontFamily: '"Saira Stencil One", sans-serif',
                fontSize: "2rem",
                marginBottom: 10,
                
              }}
            >
              Encuentra los mejores suplementos y ropa deportiva para tus entrenamientos
            </Typography>
          )}
        </Container>

        <Routes>
          <Route
            path="/"
            element={<ProductList searchQuery={searchQuery} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Drawer anchor="right" open={isCartOpen} onClose={() => setCartOpen(false)}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Carrito de Compras
          </Typography>
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </Box>
      </Drawer>

      <Footer />
    </Box>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
