import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import ForgotPasswordForm from '@features/auth/components/ForgotPasswordForm';
import AuthLayout from '@components/layout/AuthLayout';

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <Container maxWidth='sm'>
        <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
          <Typography variant='h4' component='h1' gutterBottom>
            Forgot Password
          </Typography>
          <ForgotPasswordForm
            onSubmit={() => console.log('Submit ForgotPasswordForm')}
          />
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
