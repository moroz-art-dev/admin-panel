import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import MainLayout from '@components/layout/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Container maxWidth='sm'>
        <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
          <Typography variant='h4' component='h1' gutterBottom>
            HomePage
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
