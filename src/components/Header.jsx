import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  WhatsApp as WhatsappIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "@fontsource/rubik-glitch";
import logo from "../images/logo.png";

const categories = ["Productos", "Promociones", "Ropa"];

function Header({ setSearchQuery, cartCount }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: { xs: "12vh", md: "15vh" },
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: "1 1 auto",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              sx={{ cursor: "pointer" }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Rubik Glitch", sans-serif',
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                textAlign: "left",
                color: "white",
              }}
            >
              A N Q U - G Y M - S T O R E
            </Typography>
          </div>

          <TextField
            sx={{
              input: { color: "white" },
              width: { xs: "150px", md: "250px" },
              flex: "1 1 auto",
            }}
            placeholder="Buscar productos..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flex: "1 1 auto",
              flexWrap: "wrap",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <IconButton color="inherit">
                <HomeIcon
                  sx={{ fontSize: { xs: "30px", md: "40px" }, color: "white" }}
                />
              </IconButton>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <IconButton color="inherit">
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon
                    sx={{
                      fontSize: { xs: "30px", md: "40px" },
                      color: "white",
                    }}
                  />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <IconButton color="inherit">
                <AccountCircleIcon
                  sx={{ fontSize: { xs: "30px", md: "40px" }, color: "white" }}
                />
              </IconButton>
            </Link>
            <IconButton color="inherit">
              <WhatsappIcon
                sx={{ fontSize: { xs: "30px", md: "40px" }, color: "white" }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: "15vh" }}></div>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          {categories.map((category, index) => (
            <ListItem button key={index} sx={{ cursor: "pointer" }}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
