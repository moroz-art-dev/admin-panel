import React, {ReactNode} from 'react';
import {Container, Box} from '@mui/material';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Header />
      <Container maxWidth='lg' sx={{mt: 2}}>
        <Box sx={{my: 4}}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
