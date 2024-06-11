import React from 'react';
import {TextField as MuiTextField, TextFieldProps} from '@mui/material';

type Props = TextFieldProps;

const TextField: React.FC<Props> = props => {
  return <MuiTextField {...props} />;
};

export default TextField;
