import React, {ReactNode} from 'react';
import {Container, Box} from '@mui/material';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Container maxWidth='lg' sx={{mt: 2}}>
        <Box sx={{my: 4}}>{children}</Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
