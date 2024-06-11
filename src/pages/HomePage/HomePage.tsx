import React from 'react';
import {Container, Typography, Box} from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth='sm'>
      <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
        <Typography variant='h4' component='h1' gutterBottom>
          HomePage
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
