import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008100', 
    },
    secondary: {
      main: '#09DD15', 
    },
    black: {
      main: '#222222', 
    },
    frame: {
      main: '#222222', 
    },
    icon: {
      main: '#222222', 
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #222222',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#999999', 
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none', 
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none', 
          '&:hover': {
            boxShadow: 'none', 
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#222222', 
        },
      },
    },
  },
});

export default theme;