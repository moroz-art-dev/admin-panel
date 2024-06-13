import React from 'react';
import {Box, Typography, Container} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 2,
      }}
    >
      <Container>
        <Typography variant='body1'>
          © 2004 My Application. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
