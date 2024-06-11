import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import LoginForm from '@features/auth/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth='sm'>
      <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
        <Typography variant='h4' component='h1' gutterBottom>
          LoginForm
        </Typography>
        <LoginForm onSubmit={() => console.log('Submit LoginForm')} />
      </Box>
    </Container>
  );
};

export default LoginPage;
