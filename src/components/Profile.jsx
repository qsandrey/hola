import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, Alert } from '@mui/material';

function Profile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true); 
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith('@gmail.com')) {
      setError('El correo debe terminar en @gmail.com');
      return;
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    
    const actionMessage = isRegistering ? 'Registrado' : 'Iniciado sesión';
    console.log(actionMessage, { email, password });
    setMessage(`${actionMessage}: ${email}`); 
    setError(''); 

    setEmail('');
    setPassword('');
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        {isRegistering ? 'Registrar' : 'Iniciar sesión'}
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              {isRegistering ? 'Registrarse' : 'Iniciar sesión'}
            </Button>
          </Grid>
        </Grid>
      </form>

      
      {message && (
        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body1" color="success.main">{message}</Typography>
        </Box>
      )}

      <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
        <Button onClick={() => setIsRegistering(!isRegistering)} sx={{ textTransform: 'none' }}>
          {isRegistering ? '¿Ya tienes una cuenta? Iniciar sesión' : '¿No tienes cuenta? Registrarse'}
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
