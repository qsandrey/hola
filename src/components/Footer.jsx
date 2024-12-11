import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '1rem', 
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', 
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
        &copy; 2024 ANQU STORE. Todos los derechos reservados.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <Link href="#" sx={{ color: 'white', marginX: '0.5rem', textDecoration: 'none' }}>Sobre Nosotros</Link>
        <Link href="#" sx={{ color: 'white', marginX: '0.5rem', textDecoration: 'none' }}>Política de Privacidad</Link>
        <Link href="#" sx={{ color: 'white', marginX: '0.5rem', textDecoration: 'none' }}>Términos y Condiciones</Link>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          right: '10px', 
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton sx={{ color: 'white', marginX: '0.5rem' }}>
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: 'white', marginX: '0.5rem' }}>
          <Instagram />
        </IconButton>
        <IconButton sx={{ color: 'white', marginX: '0.5rem' }}>
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: 'white', marginX: '0.5rem' }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
