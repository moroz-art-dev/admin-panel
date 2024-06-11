import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

const Button: React.FC<MuiButtonProps> = ({children, ...rest}) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
