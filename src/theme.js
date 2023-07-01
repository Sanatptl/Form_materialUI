import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#00e676",
      // main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
