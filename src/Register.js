import React, { useState } from 'react';
import { supabase } from './supabaseClient';

import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
} from '@mui/material';

export default function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Регистрация прошла успешно! Проверь почту для подтверждения.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 30 }}>
        <Typography variant="h5" gutterBottom>Регистрация</Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Пароль"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Зарегистрироваться
          </Button>
          {message && (
            <Typography sx={{ mt: 2, color: 'green' }}>{message}</Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
