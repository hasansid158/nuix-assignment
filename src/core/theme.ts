import { createTheme } from '@mui/material/styles';

const colours = {
  primary: '#008B8B',
  secondary: '#30344E',
  hoverGrey: '#F5F7FA',
  textWhite: '#FFFFFF',
  borderGrey: '#E0E0E0',
  background: '#f7f7f7',
  lightGrey: '#F9F9F9',
  darkGrey: '#333333',
};

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    textWhite: string;
    borderGrey: string;
    backgroundDarkBlue: string;
    orange: string;
    lightGrey: string;
    darkGrey: string;
  }
}

const theme = createTheme({
  spacing: 8,
  palette: {
    common: colours,
    primary: {
      main: colours.primary,
      contrastText: colours.textWhite,
      light: colours.textWhite,
    },
    secondary: {
      main: colours.secondary,
      contrastText: colours.textWhite,
      light: colours.textWhite,
    },
  },
  typography: {
    allVariants: {
      color: colours.darkGrey,
    },
    fontFamily: [
      '"Outfit"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '56px',
    },
    h2: {
      fontSize: '40px',
      fontWeight: '600',
      lineHeight: '48px',
    },
    h3: {
      fontSize: '32px',
      fontWeight: '600',
      lineHeight: '40px',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '32px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '28px',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1550,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colours.textWhite,
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          textTransform: 'none',
          padding: '8px 16px',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: colours.primary,
          color: colours.textWhite,
          '&:hover': {
            backgroundColor: '#FF765A',
          },
        },
        outlinedPrimary: {
          borderColor: colours.primary,
          color: colours.primary,
          '&:hover': {
            backgroundColor: colours.lightGrey,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '32px',
          '& .MuiTabs-flexContainer': {
            columnGap: '8px',
          },

          '& .MuiTab-root': {
            border: '1px solid #A9ABB1',
            backgroundColor: 'white',
            borderRadius: '10px',
            px: 2,

            '&.Mui-selected': {
              backgroundColor: colours.primary,
              color: 'white',
              border: 'unset',
            },

            '& .MuiTypography-root': { fontWeight: '500' }
          },
          '& .MuiButtonBase-root': {
            minHeight: '32px',
            py: .5,
            px: 1,
            maxHeight: '50px',
            '& svg': {
              fontSize: '20px',
            }
          },
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: `1px solid ${colours.borderGrey}`,
          borderRadius: '8px',
          backgroundColor: colours.textWhite,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colours.lightGrey,
            color: colours.darkGrey,
            fontWeight: 600,
            borderBottom: `2px solid ${colours.borderGrey}`,
          },
          '& .MuiDataGrid-row': {
            borderBottom: `1px solid ${colours.borderGrey}`,
            '&:hover': {
              backgroundColor: colours.hoverGrey,
            },
          },
          '& .MuiDataGrid-cell': {
            ...createTheme().typography.body2,
            padding: '8px',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colours.lightGrey,
            borderTop: `1px solid ${colours.borderGrey}`,
          },
        },
      },
    },
  },
});

export default theme;
