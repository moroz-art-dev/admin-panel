import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import RegisterForm from '@features/auth/components/RegisterForm';
import AuthLayout from '@components/layout/AuthLayout';

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <Container maxWidth='sm'>
        <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
          <Typography variant='h4' component='h1' gutterBottom>
            LoginForm
          </Typography>
          <RegisterForm onSubmit={() => console.log('Submit RegisterForm')} />
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default RegisterPage;
