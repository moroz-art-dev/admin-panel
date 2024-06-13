import React from 'react';
import {createTheme} from '@mui/material/styles';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

interface LinkBehaviorProps extends RouterLinkProps {
  href: string;
}

const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkBehaviorProps>(
  (props, ref) => {
    const {href, to, ...other} = props;
    return <RouterLink ref={ref} to={href} {...other} />;
  }
);

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default theme;
