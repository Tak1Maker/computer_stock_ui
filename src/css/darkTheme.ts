import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
 palette: {
  mode: 'dark',
  background: {
    default: '#3d3d3d',
    paper: '#3d3d3d'
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",

  },
  primary: {
    main: '#919088',

  },
  secondary: {
    main: '#db595d',
  },
},

typography: {
  htmlFontSize: 18,
  fontFamily: 'Roboto',

},

components:
{
  MuiAutocomplete: {
    styleOverrides: {
      tag: {
        margin: '1px'
      }
    }
  }
 }
})
