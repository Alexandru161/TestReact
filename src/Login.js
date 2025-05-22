import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginData.username === 'admin' && loginData.password === '1234') {
      // Сохраняем логин в localStorage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Неверный логин или пароль!');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 30 }}>
        <Typography variant="h5" gutterBottom>Вход</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Логин"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Пароль"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            type="submit"
          >
            Войти
          </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
  <         Link to="/forgot-password">Забыли пароль?</Link>
        </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
