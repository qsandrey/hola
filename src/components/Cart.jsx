import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const ProductCard = ({ product, removeFromCart, updateQuantity }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">Cantidad: {product.quantity}</Typography>
        <Typography variant="body1">
          Precio: ¢{product.price.toFixed(3)}
        </Typography>
        <Typography variant="body1">
          Subtotal: ¢{(product.price * product.quantity).toFixed(3)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => removeFromCart(product.id)}
        >
          Eliminar
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => updateQuantity(product.id, product.quantity + 1)}
        >
          +
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() =>
            product.quantity > 1 && updateQuantity(product.id, product.quantity - 1)
          }
        >
          -
        </Button>
      </CardActions>
    </Card>
  );
};

function Cart({ cart, removeFromCart, updateQuantity }) {
  const calculateTotal = () =>
    cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <Box sx={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">Tu carrito está vacío.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cart.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard
                  product={product}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ marginTop: "20px", textAlign: "right" }}>
            <Typography variant="h5">
              Total: ¢{calculateTotal().toFixed(3)}
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>
              Proceder a Pagar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;
