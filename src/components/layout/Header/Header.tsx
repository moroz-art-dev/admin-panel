import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@mui/material/Button';

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{flexGrow: 1}}>
          My App
        </Typography>
        <Button component={RouterLink} to='/'>
          Button Link
        </Button>
        <br />
        <Button color='inherit' component={RouterLink} to='/login'>
          Login
        </Button>
        <Button color='inherit' component={RouterLink} to='/register'>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
